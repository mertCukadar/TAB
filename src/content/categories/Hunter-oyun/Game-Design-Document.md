# Game Design Document

__Oyun Adı:__ Hunter 2D

__Version:__ 0.1

__Oyun Elementleri (Game Elements):__
* Hunter
* Bear
* Rabbit
* Snake
* arrow
* trap


__Görünüm (View):__
kamera belili bir alanı gösterecek şekilde tow-down view pozisyonunda hunterı ortalayarak takip eder.

__Platform:__
Pc

__Language:__
C#

## Game Play:
Oyun içerisinde bir avcı karakteri ormanda hayatta kalmak için düzenli olarak avlanmak zorunda
Archer karakteri olarak dünyaya gelen avcı çevresinde ayı, tavşan, yılan gibi bir kaç çeşit hayvanı
tuzak kurarak, ok ile vurarak indirmek zorunda. Oyun boyunca yakınında spawnlanan ayılar onların bölgesine girmeleri takdirinde sürüler halinde Huntera saldırır. Hunter seviyesi arttıkça spawnlanan ayı sayısı artar ve oyun bir bullet hell havası alır. Son wawe ardından mağara leveli açılır ve ayı inine inilerek boss ayı yenilmek zorundadır. 

Oyun içerisinde tuzak ile yakalanan hayvanlar geçici süreliğine huntera özel güç verir. Hunter wawe gelmeden tuzakları kurmalı küçük hayvanları yakalaması durumunda Çıkan özel güç tokenlerini almalıdır. 

* Ayı nın gücü hunterın bir kalbini götürebilecek şekilde saldırır her wawe de ayıların canı artarak ilerler.
* Hunter karakteri ayıdan saklanmak için çalıları kullanabilir.
* Hunter karakterinin arrow vuruş gücü levele göre artış gösterir silah gelişir.
* Hunter karakteri her level aldığında özelliklerinden birini geliştirebilir (hız , saldırı gücü , trap sayısı)

__Game Play outline:__
* Oyun ilk açıldığında ateşin başında Hunter karakteri gözükür oyunu başlat düğmesi bulunur.
* Karakterin sağ ve solunda oklar kullanılarak görünümü değiştirilebilir.
* Oyunda zorluk çıkılan wave e kadar artış gösterir custom seçilemez.
* Kontroller :
    * Player shift ile hızlı koşar
    * Player sol tık ile cursor bölgesine ateş eder
    * Player sağ tık ile trap yerleştirir
    * E ile güç değiştirir space ile aktifleştirir

__Oyun Sonu:__
    Oyun sonu boss fight kazanılırsa oyun biter.
    Player ölürse oyun kaybedilir.


__Key Features:__
Key features are a list of game elements that are attractive to the player.

DESIGN DOCUMENT
This document describes how GameObjects behave, how they’re controlled and their properties. This is often referred to as the “mechanics” of the game. This documentation is primarily concerned with
the game itself. This part of the document is meant to be modular, meaning you could have
several different Game Design Documents attached to the Concept Document.
Design Guidelines
This is an important statement about any creative restrictions that need to be considered and includes brief statements about the general (i.e., overall) goal of the design.
Game Design Definitions
This section established the definition of the game play. Definitions should include how a player wins, loses, transitions between levels, and the main focus of the gameplay.
 Game Flowchart
The game flowchart provides a visual of how the different game elements and their properties interact. Game flowcharts should represent Objects, Properties, and Actions present in the game. Each of these items should have a number reference to where they exist within the game mechanics document.
• Menu
• Synopsis
• Game Play
• Player Control
• Game Over (Winning and Losing

 Player Definition
● Use this section for quick descriptions that define the player
● Use the Player Properties section (below) to define the properties for each player. Player Properties can be
affected by the player’s action or interaction with other game elements. Define the properties and how they affect
the player’s current game.
● Use the Player Rewards section to make a list of all objects that affect the player in a positive way. Define these
objects by describing what affect they cause and how the player can use the object.
Player Definitions
A suggested list may include:
• Health
• Weapons • Actions
Player Properties
Each property should mention a feedback as a result of the property changing.
Player Rewards (power-ups and pick-ups)
Make a list of all objects that affect the player in a positive way (e.g., health replenished)

User Interface (UI)
This is where you’ll include a description of the user’s control of the game. Think about which buttons on a device would be best suited for the game. Consider what the worst layout is, then ask yourself if your UI is it still playable. A visual representation can be added where you relate the physical controls to the actions in the game. When designing the UI, it may be valuable to research quality control and user interface (UI) design information.