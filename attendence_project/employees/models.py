from django.db import models
from django.contrib.auth import get_user_model
from datetime import date

User = get_user_model()

class Department(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Employees(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    emp_code = models.IntegerField()
    date_of_birth = models.DateField(null=True,blank=True)
    designation = models.CharField(max_length=50)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    date_of_joining = models.DateField()
    shift_start = models.TimeField(default="09:00:00")
    shift_end = models.TimeField(default="18:00:00")

    address = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.emp_code} - {self.user.get_full_name()}"


    @property
    def is_birthday_today(self):
            if not self.date_of_birth:
                 return False
            else:
                 return (
                      self.date_of_birth == date.today().month
                      and self.date_of_birth.day == date.today().day
                 )
    
    @property
    def is_work_anniversary_toda(self):
         return (
              self.date_of_joining == date.today().month
              and self.date_of_joining == date.today().day
         )