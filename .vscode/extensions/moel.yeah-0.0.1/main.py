import sys 
import os 

import vscode


path=sys.argv[1]
option=sys.argv[2]


if option == 'run':
    os.chdir(path[1:])
    os.system('python manage.py runserver')

if option=='makemigrations':
    try:
        os.chdir(path[1:])
        os.system('python manage.py makemigrations')
    except RuntimeError:
        print(RuntimeError)



if option=='migrate':
    try:
        os.chdir(path[1:])
        os.system('python manage.py migrate')
        print('no')
    except RuntimeError:
        print(RuntimeError)




if option=='new django':
    name=sys.argv[3]

    dir=path[1:]
    os.chdir(os.path.dirname(dir))
    print(name)
    os.system('python -m django startproject '+name)

if option=='new app':
    name=sys.argv[3]

    os.chdir(path[1:])
    print(name)

    os.system('python manage.py startapp '+name)

