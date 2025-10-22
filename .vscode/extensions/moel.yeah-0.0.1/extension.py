import os
import sys
import asyncio
import vscode
from tkinter import *

path = os.getcwd()
# name='extensiond'


ext = vscode.Extension(
    name="Extension", display_name='Test101', version="0.0.1")


@ext.event
def on_activate():
    return f"The Extension '{ext.name}' has started"


@ext.command()
async def hello_world():
    # create
    # os.chdir('C://Users//foadm//OneDrive//Dokumenter//projects//django-project')
    # os.system('python -m django startproject ' + name)
    # os.chdir('C://Users//foadm//OneDrive//Dokumenter//projects//django-project//'+name)
    # os.system('python manage.py startapp main')
    # os.system('python manage.py migrate')
    # os.system('python manage.py runserver')

    vscode.window.show_info_message('hello world', ['test','taco','cheeseburger'])
    

    vscode.window.show_info_message(
        os.path.abspath(os.path.join(path, os.pardir)))

vscode.build(ext)
asyncio.run(hello_world())




