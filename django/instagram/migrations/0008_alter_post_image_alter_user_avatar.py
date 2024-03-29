# Generated by Django 4.1.3 on 2022-12-25 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instagram', '0007_alter_post_image_alter_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(default='default.jpg', upload_to='images'),
        ),
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='ahri.jpg', upload_to='images'),
        ),
    ]
