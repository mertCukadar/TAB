---
id: 1
title: 'Veri Yapıları Ve Algoritmalar - 1'
description: 'Veri yapıları algoritmalar Nedir & Debug Temelleri'
category: 'veri-yapilari-algoritmalar'
date: '2024-08-30'
---

# Veri Yapıları ve Algoritmalar Giriş

## İçindekiler
- [Giriş](#giriş)
- [Ders Kapsamında Öğrenilecekler](#ders-kapsamında-öğrenilecekler)
- [C Dilini Tanıyalım](#c-dilini-tanıyalım)
- [Editör Seçimi](#editör-seçimi)
- [Debugging Nedir?](#debugging-nedir)
- [Çalıştırma ve Debugging Süreci](#çalıştırma-ve-debugging-süreci)
- [Alıştırmalar](#alıştırmalar)
  - [Alıştırma 1: Döngüler ve Watches ile Debugging](#alıştırma-1-döngüler-ve-watches-ile-debugging)
  - [Alıştırma 2: Diziler ve Watches](#alıştırma-2-diziler-ve-watches)
  - [Alıştırma 3: Array Uzunluğunu Hesaplama](#alıştırma-3-array-uzunluğunu-hesaplama)

## Giriş
Veri yapıları ve algoritmalar, programlama sürecinde çok önemli bir yer tutar. Özellikle düşük seviyeli dillerle çalışırken bu konulara yatkın olmanız, kariyerinizde büyük bir avantaj sağlar.

Yalnızca bir programlama dili bilmek, yazılım geliştirmek için yeterli değildir. Projeleriniz büyüdükçe ve karmaşıklaştıkça, veri yapıları ve algoritmaların ne kadar temel taşlar olduğunu fark edeceksiniz.

## Ders Kapsamında Öğrenilecekler
Bu ders kapsamında aşağıdaki konuları öğreneceksiniz:
* Mevcut veri yapıları ve modellerin anlaşılması
* Algoritmaları incelemek, mevcut çözümleri anlamak
* __Liste ve Bağlantılı Liste, Ağaç, Çizge, Graf__ gibi veri modellerinin anlaşılması
* Bir programın bellek gereksinimi ve çalışma hızlarının hesaplanabilmesi
* Arama ve sıralama algoritmalarının kavranması
* Program/Yazılım Geliştirme sürecinin anlaşılması

## C Dilini Tanıyalım
C programlama dili, Unix/Linux gibi işletim sistemlerinin temel dili olması nedeniyle yazılım geliştirme alanında yoğun olarak kullanılmaktadır. Orta seviye bir programlama dili olan C, bellek adresleriyle esnek çalışabilme imkanı sunar ve bu ders kapsamında tercih edilmiştir.

Dersimizde aşağıdaki konulara hakim olmanız, dersin içeriğini daha iyi kavramanızı sağlayacaktır:
* Diziler ve Bellek Düzeni
* İşaretçiler (Pointer)
* Dinamik Bellek Kullanımı
* Yapısal Veri Tanımlaması (Struct ve Union)
* Recursive Fonksiyonlar
* Disk Saklama Birimlerine Erişim

Bu konulara ilerleyen derslerde değineceğiz, ancak önceden araştırarak bu başlıklar hakkında fikir sahibi olmanız faydalı olacaktır.

## Editör Seçimi
Editör seçimi ders kapsamında tamamen size bırakılmıştır. Eğer bu yazıyı okuyorsanız, muhtemelen konforlu hissettiğiniz bir editör vardır. Ancak dersimizde __Code::Blocks__ editörü üzerinden devam edeceğiz.

[Editörün resmi sayfasına giderek indirebilirsiniz.](https://www.codeblocks.org/downloads/)

## Debugging Nedir?
Debugging, geliştirdiğiniz yazılım veya programın kaynak kodunda bulunan hataları tespit etme sürecidir. Kodunuz üzerinde çalışırken bazı değişkenler kritik öneme sahiptir ve bunların doğru çalışıp çalışmadığını anlamak için debugging tekniklerini bilmek çok önemlidir.

Bu derste, değişkenleri izleyip hangi noktalarda manipüle edildiklerini gözlemleyerek temel debugging kavramlarını pratikte öğreneceğiz.

## Çalıştırma ve Debugging Süreci
Birçok IDE (Integrated Development Environment), debugging işlemleri için gerekli kısayolları sunar. Biz dersimizde Code::Blocks üzerinden devam edeceğiz.

Kod yazarken, kodunuzun yukarıdan aşağıya doğru satır satır çalıştığını bilmelisiniz. Kodunuzun belirli noktalarına breakpoint koyarak, bu satırlarda programın durmasını ve o anki durumu analiz etmenizi sağlayabilirsiniz.

__Breakpoint eklemek için, satır numarasının yanındaki boş alana tıklayabilirsiniz.__ Kırmızı bir işaret belirecektir. Aşağıda bir örnek görsel bulabilirsiniz.

![breakpoint](https://upload.wikimedia.org/wikipedia/en/8/84/Visual_Prolog_IDE_Screenshot.png)

Artık programınızı debug modunda çalıştırıp alıştırmalarımıza geçebiliriz.

### Kısayollar:

> __F5__ = BreakPoint

> __F8__ = Debug/Continue

> __F7__ = Next Line

> __Shift + F7__ = Step Into

> __F4__ = Run to Cursor

## Alıştırmalar
Şu ana kadar öğrendiğiniz konuları pekiştirmek adına birkaç alıştırma yapalım. Bu alıştırmaları tamamladığınızda temel debugging sürecine hakim olacaksınız.

Yapamayacak olursanız endişelenmeyin. YouTube kanalımdan birebir nasıl uygulandığını sizlerle paylaşıyor olacağım.

### Alıştırma 1: Döngüler ve Watches ile Debugging
Her şeyden önce, Code::Blocks'a gidip bir konsol aplikasyonu oluşturun.

* Verilen uygulamaları Code::Blocks programında yazarak değişkenlerini izleyiniz (watches).
* 10 defa dönecek bir for döngüsü oluşturunuz.
* İki adet değişken belirleyiniz.
* Döngüde, değişken sayısı tek ise bir değişkene, çift ise diğerine rastgele bir sayı atayın.
* Bu atanan değerleri watches ile izleyiniz.
* Rastgele sayı atama işlemi için internetten faydalanabilirsiniz.

#### Dikkat!
Cevaba geçmeden önce kodu kendiniz yazmayı deneyiniz. Bu süreç sizi zorlayabilir, ancak algoritmaları kurabilme kabiliyetinizi geliştirecektir.

```c
#include <stdio.h>
#include <stdlib.h>

int main(){
    int var1;
    int var2;

    for(int i=0; i<10; i++){
        if(i%2 == 0){
            var1 = rand();
            printf("var1 : %d\n", var1); // --> bu kısma break point atınız
        }else{
            var2 = rand();
            printf("var2 : %d\n", var2); // --> bu kısma breakpoint atınız
        }
    }

    return 0;
}
```

Kodu yazdıktan sonra F8 ile debug modunda çalıştırabilirsiniz. Debug menüsünün altında bulunan __Debugging Window__ > __Watches__ ile değişkenleri adım adım izleyiniz.

#### Sorun mu yaşıyorsunuz?
Code::Blocks'ta veya farklı IDE'lerde çalışırken GCC compiler'ı kodunuzu derlemek için, __GDB__'yi ise debug için kullanıyoruz. Eğer bilgisayarınızın dizinleri Türkçe ise veya Türkçe karakter içeren bir dosyanız varsa:

> C://Masaüstü//deneme-ürürü//main.c

Debug modunda hata alabilirsiniz. Ekranınız açılıp kapanır ve herhangi bir breakpoint devreye girmez. Dosya dizinlerinizin tamamen İngilizce karakterlerden oluşması gereklidir. Bunun dışında bir problem yaşıyorsanız, gdb.exe dosyanızın path (dosya dizini) doğru tanımlanmamış olabilir. İnternetten bu konuda yardım alabilirsiniz.

### Alıştırma 2: Diziler ve Watches
Son olarak, dizilerle çalışmayı pekiştirmek ve biraz daha pratik kazanmak adına bir çalışma yapalım.

* Code::Blocks'ta yeni bir konsol uygulaması oluşturun.
* 5 elemanlı bir `int` dizisi oluşturun ve bu dizinin her elemanına rastgele değerler atayın.
* Bu dizinin her elemanını bir for döngüsü içinde kontrol edin.
* Eğer bir eleman 50'den büyükse, o değeri bir değişkene ekleyin; eğer 50'den küçükse başka bir değişkene ekleyin.
* Döngü bittikten sonra iki değişkenin toplam değerlerini ekrana yazdırın.
* Her döngü adımında, elemanların değerini ve toplamların nasıl değiştiğini izlemek için watches kullanın.
* Dizinin her elemanı kontrol edilirken breakpoint koyarak adım adım izleyin.

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int arr[5];
    int count_of;
    int var1 = 0;
   

 int var2 = 0;

    count_of = sizeof(arr) / sizeof(arr[0]);

    printf("Length of array: %d\n", count_of);
    printf("One item's size: %d\n", sizeof(arr[0]));

    for(int i = 0; i < count_of; i++){
        arr[i] = rand() % 100; // --> breakpoint
    }

    for(int i = 0; i < count_of; i++){
        if(arr[i] > 50){
            var1 += arr[i]; // --> breakpoint
        } else {
            var2 += arr[i]; // --> breakpoint
        }
    }

    printf("Sum of greater: %d \n", var1);
    printf("Sum of less: %d \n", var2);

    return 0;
}
```

### Alıştırma 3: Array Uzunluğunu Hesaplama
Şimdi, array uzunluğunu nasıl hesapladığımız konusuna bakalım. Aşağıdaki kodu inceleyiniz...

```c
count_of = sizeof(arr) / sizeof(arr[0]);
printf("Length of array: %d\n", count_of);
```
---
```c
count_of = sizeof(arr);
printf("Length of array: %d\n", count_of);
```

İlk bakışta hangi kodun doğru olduğunu düşünüyorsunuz? Eğer ilki diyorsanız ve nedenini biliyorsanız, buradan sonrasını okumanıza gerek yok.

__Nedenini merak eden arkadaşlar için açıklayalım:__

Bunu araştırarak öğrenelim arkadaşlar.

Öncelikle, aşağıdaki değişkenleri oluşturmanızı isteyeceğim:

* 5 elemanlı bir array oluşturun, herhangi bir atama yapmanıza gerek yok (int türünden olsun).
* `int size_arr;` adında bir değişken oluşturun.
* `int size_item;` adında bir değişken oluşturun.

* Array'inizin boyutunu `sizeof` ile ölçün ve `size_arr` değişkenine kaydedin.
* Ardından array'iniz içerisindeki ilk elemanın boyutunu ölçün ve bunu `size_item`'e atayın.
* Son olarak `sizeof(arr) / sizeof(arr[0])` işlemini gerçekleştirin.

Print işlemi yapmadan, bu satırlara breakpoint koyarak watches ekranı üzerinden sonuçları gözlemleyiniz.

#### Sonuç:
`int` veri tipindeki değişkenler bellekte 4 byte yer tutar. Bunu `size_item` değişkeninizde görebilirsiniz. Salt haliyle, 5 adet `int` değer tutan bir dizi:

5 x 4 = 20 byte yer kaplar. Bu durumda array uzunluğunu hesaplamak için:

> array_{size} / item_{size}

formülünü kullanabilirsiniz.

Anlamadığınız bir konu olursa ya da ders notlarında bir hata bulursanız, mail adresim üzerinden bana ulaşabilirsiniz.

Dr. Öğr. Üyesi Ensar Arif Sağbaş'ın ders notlarından faydalanılarak yazılmıştır. Kendisine teşekkürlerimi sunuyorum.
