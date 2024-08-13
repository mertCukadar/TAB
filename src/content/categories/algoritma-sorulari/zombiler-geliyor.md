---
id: 1
title: 'Zombiler Geliyor #1'
description: 'Zombileri durduran algoritmayı yazmak senin elinde'
category: 'algoritma-sorulari'
date: '2024-08-14'
---

# Sorularla Programlıyorum #1

Her şey denemekle başladı… Biz de en başından sonuna deneyerek öğreneceğimiz bu serüvende yoldaşlar aramaktayız. Problemler çözeceğiz, yeri gelecek içinden çıkamayacağız. Bu süreç içerisinde ne mi öğreneceğiz peki? Öğrenmeyi öğreneceğiz. Elinizdeki bu kitap, uzun zamandır unuttuğumuz, belki de bize unutturulan en değerli öğretiyi size hatırlatmayı ve aslında elinizin altında bulunan bilgisayarın ne denli paha biçilmez bir laboratuvar olduğu hakkında bilgi vermeyi amaçlıyor. Mümkün olduğunca uygulama üzerinde duracağımız bu kitabın, yazılıma başlarken bir el kitabı olması dileğiyle başlayalım.

Yazılım, aslına bakarsanız, günlük hayatımızda farkında olmadan sıklıkla karşılaştığımız problemlerin kod betiklerine dökülmüş halinden farksız sayılmaz. Nereden baksanız, her gün çözdüğümüz problemleri yazıya dökmeyi öğreneceğiz nihayetinde. Üstelik eskisi gibi de değil; elimizin altında inanılmaz güçlü araçlar, öğretmenler bulunmakta. Bunları kullanmayı ve değerlendirmeyi bilmek tamamen bizim elimizde.

Yapay zeka diyorlar bu araçlara ve şu dönemlerde sıklıkla duyduğumuz bir kavram. Ona soracağız, bizim için sorunu çözmesini değil, sorunu çözme sürecinde destek olması için elbette… Yoksa şu an başlamamızın herhangi bir anlamı yok. Çok uzatmanın da anlamı yok, haydi başlayalım.

Sizinle çıktığımız bu serüvende tamamen kendiniz öğrenmeye çalışacaksınız ve elimizdeki sorulara cevaplar bulmaya çalışacağız. Bu soruları çözerken kazanacağınız yetenekler, zamanla sizi kalifiyeli bir araştırmacı haline getirmeyi amaçlamaktadır.

## Zombiler Geliyor

Anlaşıldı, hemen devam ediyorum: Profesör Zeliha, zombilerin sıralamasındaki anomaliyi tespit etti. Zombiler, sırasıyla 1, 2, 3, 4, 5,… şeklinde ilerlerken, Profesör Zeliha'nın teorisi doğrultusunda öldürmemiz gereken zombiler, sıralamada 3 ve 5 katlarını oluşturanlardır.

Bu duruma göre, öldürmemiz gereken zombilerin sıra numaraları şu şekildedir:

3, 5, 6, 9, 12, 15, 18, 20, 21,…

Yani, her seferinde 3 ve 5 katlarını alarak devam eden bir dizi. Profesör Zeliha, bu zombi sıralamasındaki sayıların toplamlarının, dünyayı kurtaracak panzehiri üretecek kritik bir formül olduğunu belirtti. Bu nedenle, belirtilen zombi numaralarının toplamını hesaplayarak Profesör Zeliha'ya bildirmemiz gerekiyor. Örneğin, ilk birkaç zombi numarasını toplarsak:

[3, 5, 6, 9, 12, 15,]

3 + 5 + 6 + 9 + 12 + 15 = 50

Bu toplamı Profesör Zeliha'ya ileterek, dünyayı kurtaracak panzehiri ele geçirmek için gereken ilk adımı atmış oluruz. Geliyorlar, dikkat!

## Ön Hazırlık

Anahtar Kelimeler: {For loop, Değişken(Variable), Print komutu, Koşul ifadeleri (If Conditions), Temel Mantık}

İşte bilgisayarların en güzel yanına geldik. Bu soruyu matematiksel olarak da çözebilirsiniz. Elimizde 1, 2, 3, 4, 5…, 1000’e kadar zombilerden oluşan bir dizi bulunmakta ve biz 1, 3, 5, 6, 9, 12, 15…’i ayırarak 3 ve 5’in katlarını elde edip bunların toplamını bulmaya çalışıyoruz. Yani her sayıyı şu şekilde ifade edebiliriz:

Bir n sayısı 3 ya da 5’e bölünüyorsa n sayısıdır. Bu durumda ben bilgisayar olsam başlarım 1’den saymaya 1000’e kadar, sonra her seferinde bakarım sayı 3'e ya da 5'e bölünüyor mu? Baktım birine bölünüyor, o zaman o sayıyı yazarım bir kenara, devam ederim. Bu vesile ile elde edeceğim sayılar ne olur? 😊

[3, 5, 6, 9, 12, 15,]

Şimdi gel gelelim bunu Python’da nasıl yapıyoruz, açıklamaları ile birlikte ilerleyelim… Her şeyi yukarıda dediğim gibi yapacağım ve sizden soru çözümlerine geçmeden önce internetten sadece anahtar başlığının altında eğer var ise anahtar kelimeleri araştırıp Python’da pratik etmenizi rica ediyorum. İsterseniz direkt çözüme de geçebilirsiniz (tabi çözemediyseniz 😊)…

Öncelikle bir n değişkeni oluşturalım.

```python
n = 0  # n değişkeni tanımlandı
```

Ardından bu n değişkenini birer birer artırabileceğimiz bir for loop yapalım. Ama şimdi diyorsunuz hadi yukarıdakini anladık for loop ta neyin nesi? Bir örnek göstererek Python’da bunu rahat bir şekilde açıklığa kavuşturabilirim sanıyorum.

```python
for sayi in range(10): # for loop
    print(sayi) # sayi değişkenini ekrana yazdır
```

Yukarıda gördüğünüz for loop içerisinde bir `print(<mesaj ya da değişkenler>)` fonksiyonu bulunduruyor. Burada kod bize diyor ki: "Ben 10’a kadar sayacağım ve her bir arttığımda bunu `sayi` değerine eşitleyeceğim. Ardından bunu ekrana yazdıracağım." Kodu çalıştırdığınız zaman, sağdaki çıktıyı ekranınızda göreceksiniz.

Burada bir şeye dikkat çekmek istiyorum: 10 kere sayıyı artırdı ancak 0’dan başladı. Burası kulağınıza küpe olsun, birçok programlama dilinde bununla karşılaşacaksınız. Demek ki biz for loop ile 10 kere sayi değerini artıran bir döngü yapabiliyor ve bunu ekrana yazdırabiliyoruz. Burası cepte.

## Operatör ve Koşul İfadeleri

Sırada, bu sayi değeri üçe bölünüyor mu, bunu kontrol etmeliyiz. Bölünüyorsa ekrana "bölünüyor" yazdıralım, bölünmüyorsa da "bölünmüyor" diyelim.

```python
for sayi in range(10):  # for loop
    if sayi % 3 == 0:
        print(sayi, ": tam bölünüyor")
    else:
        print(sayi, ": tam bölünmüyor")
```

`%` yüzde işareti mod anlamına geliyor, yani verilen sayının 3’e bölümünden kalan nedir sorusuna bu operatör cevap verecektir. `==` ifadesi de diyor ki: "Sayi değerinin 3’e bölümünden kalan 0 mı?" Direkt bu soruyu soruyor anlayacağınız ve sonucunda 0 ya da 1 değeri dönüyor yani (bool) bir değer.

Yukarıdan aşağıya koşullu ifademizi okumak, koşulları da bir nebze nasıl kullanacağınız ile ilgili fikir verecektir:

Eğer sayi değeri 3’e bölünüyorsa, yani True dönüyorsa "<sayi değeri>: tam bölünüyor" yazdır. Aksi takdirde, sayı 3’e bölünmüyorsa (else) "<sayi değeri>: tam bölünmüyor" yazısını ekrana yazdır diyoruz.

Şu an öğrenilmesi gereken bir şey kaldı ki çok önemli: Mantık operatörleri çeşitli dillerde çeşitli notasyonlarla görebileceğiniz, gönlümüzün sultanı sorumuzun anahtarı mantık operatörleri Python’da `and` ve `or` olarak yazılabiliyor. Daha detaylı bir şekilde internetten bakabilirsiniz. Ancak günlük hayatımızda dahi kullanıyoruz kendilerini, örnek verelim hemen:

- Kahve ya da çay istiyorum (ikisinden biri olur yani)
- Kahve ve çay istiyorum (ikisini de istiyorum yani)

Bu durumda, bizim sorumuz için 3 ya da 5’e bölünmesini istiyorum (ikisinden birine bölünmesi yeterli olacaktır). 3 ve 5’e bölünmesini isteseydim, [15, 30, 45,…] değerlerini alacaktım sadece. Bu yüzden bu soru için gönlümüzün sultanı "ya da" ile devam ediyoruz.

```python
for sayi in range(10):  # for loop
    if sayi % 3 == 0 or sayi % 5 == 0:
        print(sayi, ": tam bölünüyor")
    else:
        pass
```
Yukarıda da görebileceğiniz üzere sayi 3 e ya da 5 e bölünüyorsa ekrana o sayi değerini ve tam bölündüğünü yazdırıyoruz else te ise alışa gelmedik bir şey var pass kısaca açıklamak gerekirse. Yukarıdaki durum sağlanmazsa döngüye devam et geç anlamına geliyor.

## Çözüm:
Bu sürece kadar gelmeyi başardık aşağı yukarı anlattıklarımdan bir şeyler çıkarabilmiş olmanızı umuyorum çıkaramadıysanız da hiç önemli değil sadece bu kitap size yazılımı öğretmeyecek tabiki. Anlamadığınız yerler olacaktır mutlaka bunlar için Google amcamızdan yardım alın mutlaka. Sizlerle anahtar kelimeleri paylaştım w3schools ve benzeri sitelerden bunun pratiklerini yapabilirsiniz anahtar kelimeleri anlamanız dahilinde soruyu mutlaka Çözümüne bakmaksızın tek başınıza çözmeye çalışınız. Çözene kadarda pes etmeyin mantığını kafanıza kurduğunuz an gerisi bunu yazıya dökmekten ibaret.

```python
n = 0

for i in range(1001):
    if i % 3 == 0 or i % 5 == 0:
        n = n + i

print(n)
```