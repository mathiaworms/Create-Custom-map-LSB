## TUTORIAL FOR CREATE CUSTOM MAP 

So , it's a "tutorial' only for information , i'm not expert and you can get problems when you do that ,
Before start all : at all readers, i will not be held responsible for any damages that could arise from using this website or softwares and acting upon the information that it contains.

For Questions go on "Open issue" on github :) .

## THANKS SO MUCH 

For commencement , i want to say thanks for alls guys who help me , cabeca143 , Lizardy , Ishawdow0 , crauzer , Chewy , S0cr4te , Pupix And other
I can't enumerate all but THANKS.

## What do i need for start? 

At first , you need use LeagueSandBox or other Emulator of L0L , in this exemple i will use LeagueSandBox Version december 2021 
(The tutorial can be doesn't work with other version, LeagueSandBox is frecently updated , i will try to update this page in the same time )


I put the last version of LeagueSandBox , search in commit if you want old version :) 
# [Gameserver ( LeagueSandBox ) ](https://https://github.com/LeagueSandbox/GameServer)
# [L3ague 0f L3gend 4.20 Version Scrubbed ( Moddable ) ](https://drive.google.com/file/d/1JVUGe75nMluczrY14xb0KDXiihFRlGnV/edit)
This one is necessary because we can ( for moment) only customise WGEO file , and 4.20 have the new summoners rift with WGEO files :) 
# [Wooxy!](https://chewychronicles.wordpress.com/wooxy/)
Wooxy can be detected by antivirus windows, it's our editor of maps ! very important 
# [MOBEditor!](https://github.com/LoL-Sabre/MOBEditor)
This one is for edit position of turret, inhibitor, nexus , bush and "levelprop"
# [paint.net](https://www.getpaint.net/download.html)
editing Bmp file , if you have another take it 
# [LoL-NGRID-converter!](https://github.com/mathiaworms/LoL-NGRID-converter/tree/editer)
-This one can export aimesh_ngrid on bmp format or write on them directly "i use a method for don't need write anything for edit them"
# [Extract RGB Pixel Color Data From Multiple Images Software](https://www.sobolsoft.com/extractrgbpixel/)
This extract from bmp file , file txt with position of pixel and their color ( free version need "delete line from txt")


## At first 

At first , you need have a fonctionnal Gamesever , for that , go on github and read the Readme ! if you can't stop tutorial now :'( 

## Wooxy - Edit Wgeo file

Wooxy is a tools can custom your LOL , that we need is MapEditor  : 
![Image](https://i.imgur.com/N9yO9qh.png)
![Image](https://i.imgur.com/f4NiA4m.png)
![Image](https://i.imgur.com/Dl3SvGP.png)
- At 1 : 
Select your WGEO File : (we have NEWSR)
\League-of-Legends-4-20\RADS\solutions\lol_game_client_sln\releases\0.0.1.68\deploy\LEVELS\map11\Scene\room.wgeo

- at 2 : 
\League-of-Legends-4-20\RADS\solutions\lol_game_client_sln\releases\0.0.1.68\deploy\LEVELS\map11\Scene\textures

- at 3 : 
\League-of-Legends-4-20\RADS\solutions\lol_game_client_sln\releases\0.0.1.68\deploy\LEVELS\map11\Particles.dat
- at 4: 
Texture quality , i recommend 100% ( for me i have crash when is before than 100% )
![Image](https://i.imgur.com/VAFFpnc.png)
- In left you can see all model , you can export them or modificate their emplacement and add texture or change texture 
The best way is add model 3d ! 

If you want more information for " how to use wooxy "  , see this video : 
# [Video explain how it work](https://youtu.be/g0viZBhrbRo)

For moment it's only "visual" changement , if you want add wall or grass see the next of tutorial 

## LOL-NGRID-Converter - aimesh_ngrid file editing 

This is currently very beta ( i'm not perfect dev' , i have do all i can for this but frends like Ishadows work on editor like paint for this !)  , for moment we can  edit file bmp with paint.net.. or write in editor code ( first method more friendly for moment) 

So first , we will export bmp file from aimesh_ngrid file 

So use LoL-NGRID-converter , and drag and drop on exe the file : 

- League of Legends_UNPACKED\League-of-Legends-4-20\RADS\solutions\lol_game_client_sln\releases\0.0.1.68\deploy\LEVELS\map11\aipath.aimesh_ngrid

dialog-box will appear , write false , and this will only export bmp file :
The file you need is that : 
![Image](https://i.imgur.com/9p1VAOT.png)

This file is wall/walk/bush : Wall in grey , green = grass , and walkable = white ( for other color , see github of lol-ngrid-converter ) 
with an editor like paint.net , you can now edit bmp : 
- Before : 
![Image](https://i.imgur.com/XdQcwMp.png)
- After 
![Image](https://i.imgur.com/WwXqXnF.png)
BUT ! ( the problem actual with my method you need "reverse" and "mirror" for converter txt and reader of editor ) 
So when you save your "minimap" do that : 
![Image](https://i.imgur.com/TIzRvpL.png)
"""""" Yeah, big problems with this method ^^' """"""

So we will create txt with all position of each pixel , so we need  : " Extract RGB Pixel Color Data From Multiple Images Software" 
![Image](https://i.imgur.com/qnoB9xe.png)
Add you bmp file in , and It will export txt file with all position and color rgb 

Caution : if you use free version of rgb pixel color , you will have problem with converter , so use editor text like visual studio and do that 

![Image](https://i.imgur.com/gv6FmiE.png)

Do CTRL + SHIFT + H

![Image](https://i.imgur.com/h8PgPpk.png)

Copy paste : 
Line break 
Please purchase personal license
and just do enter , this will remove " anti-free" 

After return in lol-ngrid-converter : 
Open NavGridEditing.cs 

And change this line (@"D:\a model 3d\lolngridconverter\LoLNGRIDConverter\LoL-NGRID-converter\LoLNGRIDConverter\LoLNGRIDConverter\AIPath.visionPathing.txt"))
With the position of your Aipath-txt 
re-compile then 

And now you can drag and drop the original file aipath.aimesh_ngrid and type true ! 
Now you have edited aipath.aimesh_ngrid ! Congratulation 

you can put them in your folder of map 
AND in LeagueSandBox : 
- \GameServer\Content\LeagueSandbox-Default\AIMesh\map11

Now your map have custom wall/walkable/and "grass" ( just invisibility) 

## MobEditor - MapObjects.mob

So , now it's mobeditor , with that you can custom position of grass , turret and other .

just open Mobeditor and select MapObjects.mob in you foldermap/scene/MapObjects.mob

![Image](https://i.imgur.com/BR0zt0Q.png) 


when you have finished ! you need doing changement in leaguesandbox ( at this day MapObjects.mob can't be read by Leaguesandbox)

On leaguesandbox add turret and nexus manually with "turret method" or scb.json with your position of your turret 

( incompleted section because leaguesandbox is frequently update so this can be changed )

## For jungle or items ? 

For jungle , you can change position of monster in leaguesandbox-code directly , and you can custom skin of baron of other in your files of your games

for items in shop , with wooxy you can edit bin Items.inibin in map folder , you can remove or add items in shop 
" lol can detect modification and set default shop if he see problems" 


## For LS4-launcher ? 

You can add your map on ls4-launcher after you have finished , i have added old 3v3 - dominion and other 
if you want tutorial for that i will continue 

## For my custom maps ??

I don't know if i will release it one day , it's just only for understand how work league of legend , 
I want create custom monster for jungle and custom minions , but im very bad and i work so time is not present , 
If community want , i will do an zip/rar with all file for my map and skeletton for launch it with LSB 

## Word for end ! 

This tutorial is just for information , and i want ameliorate it when new software or if i find other method for create custom map "nvr file or other" 
and LeagueSandBox is in constant evolve , so this can be obselete in 3 days after i write this so , Only for fun and modders who want create custom maps :) 

FOR ALL QUESTIONS , go on sections issue on github :) i will try answers at max ! 

Good Days at all :) 

create with github-page , lazy to write website for that x) 
https://mathiaworms.github.io/Create-Custom-map-LSB/