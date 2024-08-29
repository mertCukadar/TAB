---
id: 1
title: 'Veri Yapıları Algoritmalar Giriş'
description: 'Veri yapıları algoritmalar dersimizi genel olarak inceleyelim'
category: 'veri-yapilari-algoritmalar'
date: '2024-08-29'
---

# Veri Yapıları ve Algoritmalar

## Giriş
Veri yapıları ve algoritmalar programla sürecinde eksikliği çok hisedilen çok önemli bir konudur özellikle düşük seviyeli diller ile çalışırken işleyeceğimiz konulara yatkınlığınız gelecekteki konumunuz için çok önemli bir yer etmektedir.

yalnızca bir programla dili bilmek yazılım geliştirmek için yeterli değildir projeleriniz ölçeklendikçe bu uygulamaların ne kadar temel taşlar olduğunu göreceksiniz.

Başlamadan Ders Notlarına katkılari için Dr. Öğr. Üyesi Ensar Arif Sağbaş'a Teşekkürlerimi iletyorum.

## Ders Kapsamında Öğrenilecekler
* Mevcut veri yapıları ve modellernin anlaşılması
* Algoritmaları incelemek, mevcut çözümleri anlamak
* __Liste ve Bağlantılı Liste Veri Modeli , Ağaç , Çizge , Graf__ gibi veri modellerinin anlaşılması.
* Bir programın bellek gereksinimi ve çalışma hızlarının hesabının yapılabilmesi
* Arama ve sıralama algoritmalarının kavranması
* Program/Yazılım Geliştirme sürecinin anlaşılması

## Editör seçimi
Editör seçimi kısmı ders kapsamında tamamen size bırakılmıştır. Zaten şu seviyede eğer bu yazıyı okuyorsanız mutlaka konforlu hissetiğiniz bir editör vardır. Ancak dersimizde __Code Blocks__ editörü üzerinden devam edeceğiz.

[Editör Resmi sayfasına giderek indirebilirsiniz.](https://www.codeblocks.org/downloads/)

## Çalıştırma ve Debugging Süreci
Temel olarak bir çok ide (integrated development environment) size bu sunacağım kısa yolları barındırır yani illa buradan ilerlemek zorunda değilsiniz grafik arayüzünde kısayollar üzerinden kontrollerinizi sağlayabilirsiniz.

Ama biz Code Blocks üzerinden çalışmamıza devam edelim.

> __F5__ = BreakPoint

> __F8__ = Debug/Continue

> __F7__ = Next Line

> __Shift + F7__ = Step into

> __F4__ = Run to cursor

## Alıştırmalar
şu ana kadarki kısmı iyi kavrayabilmek adına önümüzdeki derslerdede olacağı gibi bir kaç adet alıştırma yapalım bu alıştırmaları tamamlamanız halinde temel debugging sürecine hakim olacaksınız.

yapamayacak olursanız hiç panik yapmayın. youtube kanalımdan birebir nasıl uygulandığını sizlerle paylaşıyor olacağım.


### Alıştırma 1 (Watches)
her şeyden önce sizden codeblocks'a gidip bir konsol aplikasyonu oluşturun.

* Verilen uygulamaları codeblocks programında yazarak değişkenlerini izleyiniz (watches).

* 10 defa dönecek bir for döngüsü oluşturunuz. 

* İki adet değişken belirleyiniz.

* Döngünün değişken sayısı tek ise değişkenlerden birine, çift ise diğerine rastgele bir sayı oluşturup atama yapsın.

* Bu atanan değerleri watches ile izleyiniz.

* Rastgele değer atama için interneti kaynak olarak kullanabilirsiniz.



```c
#include <stdio.h>
#include <stdlib.h>

int main(){
    int var1;
    int var2;

    for(int i=0;i<10;i++){
        if(i%2 == 0){
            var1 = rand();
        }else{
            var2 = rand();
        }
    }

    return 0;
}

```


