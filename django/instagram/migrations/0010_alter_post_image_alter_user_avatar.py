# Generated by Django 4.1.3 on 2022-12-25 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instagram', '0009_alter_post_image_alter_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(default='instagram/media/default.jpg', upload_to='instagram/media'),
        ),
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='instagram/media/ahri.jpg', upload_to='instagram/media'),
        ),
    ]
