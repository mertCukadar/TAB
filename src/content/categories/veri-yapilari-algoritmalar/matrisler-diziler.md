---
id: 3
title: 'Diziler ve Matrisler'
description: 'Diziler ve matrislerin temel yapılarını hatırladığımız ön hazırlık dersi.'
category: 'veri-yapilari-ve-algoritmalar'
date: '2024-09-22'
---

# Diziler ve Matrisler

## Bellek Düzeni ve Diziler
Yazılımcı açısından bellek, her birinde belirli uzunlukta verilerin saklandığı gözlerden oluşan veri tutma birimidir. Her bellek gözünün kendine ait bir **bellek adresi** bulunur ve bu adres aracılığıyla bellekteki veriye erişilir.

Aşağıdaki kodu inceleyelim. Kodun altında açıklamalarını bulabilirsiniz:

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int var = 10;
    int *ptr;
    ptr = &var;

    // Var'ın adresini yazdırır
    printf("var address: %p\n", ptr);
    
    // Var'ın değerini yazdırır
    printf("var value: %d\n", *ptr);

    return 0;
}
```

### Açıklamalar:
1. `int var = 10;`  
   `var` isminde bir tam sayı değişkeni tanımlanıyor ve değeri `10` olarak atanıyor. Bu, bellekte bir alan ayırır ve bu alan içinde `10` değeri saklanır.

2. `int *ptr;`  
   `ptr` adında bir **pointer** (gösterici) değişkeni tanımlanıyor. Pointer, bellekte bir adresi tutabilen bir değişken türüdür.

3. `ptr = &var;`  
   Bu satırda, `ptr` pointer'ına `var` değişkeninin adresi atanıyor. `&` operatörü, bir değişkenin bellekteki adresini alır. Böylece `ptr`, `var`'ın bellekteki yerini gösterir.

4. `printf("var address: %p\n", ptr);`  
   `printf` fonksiyonu, `var` değişkeninin bellekteki adresini yazdırır. `%p`, pointer türündeki bir veriyi yazdırmak için kullanılır. 

5. `printf("var value: %d\n", *ptr);`  
   Bu satır, `ptr`'nin işaret ettiği adresteki değeri ekrana yazar. `*ptr`, `ptr`'nin gösterdiği adresin içindeki değeri temsil eder, yani bu durumda `var`'ın değerini yazdırır.

6. `return 0;`  
   Program başarılı bir şekilde sonlanır ve işletim sistemine `0` değeri döner.

### Özet:
Bu örnekle pointer kullanarak bir değişkenin bellekteki adresine ve değerine nasıl erişileceğini öğrendik.

---

## Diziler

### 1. Statik Dizi Bildirimi
Dizinin boyutu biliniyorsa, **statik** olarak tanımlanabilir. Bellekte sabit bir alan ayrılır.

```c
#include <stdio.h>

int main()
{
    int var[3] = {1, 2, 3};  // 3 elemanlı bir dizi

    for (int i = 0; i < 3; i++)
    {
        printf("var[%d] = %d\n", i, var[i]);
    }

    return 0;
}
```
Bu örnekte, `var[3]` dizisi bellekte sabit bir yer kaplar ve içerisine 3 adet tam sayı değeri atanır.

### 2. Dinamik Bellek Kullanımı ile Dizi
Eğer dizinin uzunluğu çalışma anında belirlenmesi gerekiyorsa, **dinamik bellek** kullanılarak dizi oluşturulabilir.

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *var;
    int size = 3;

    var = (int*)malloc(size * sizeof(int));  // Dinamik bellek ayırma

    if (var == NULL)
    {
        printf("Bellek ayrilamadi!\n");
        return 1;
    }

    var[0] = 1;
    var[1] = 2;
    var[2] = 3;

    for (int i = 0; i < size; i++)
    {
        printf("var[%d] = %d\n", i, var[i]);
    }

    free(var);  // Belleği serbest bırakma
    
    return 0;
}
```

Dinamik bellek kullanımı, bellekte çalışma anında yer ayırmayı sağlar. Örnekte, `malloc` fonksiyonu ile bellek ayrıldı ve `free` fonksiyonu ile bu bellek serbest bırakıldı.

---

### Dizi Bildirimi
Diziler tek boyutlu yapılar olup şu şekilde bildirilir:

```c
int var[10];  // 10 eleman tutacak bir dizi
```

Bir dizinin bellekte işgal ettiği alan, dizi boyutunun veri tipi uzunluğuyla çarpılmasıyla hesaplanır. Örneğin, `var[10]` dizisi 10 elemandan oluşur ve her eleman `int` tipinde olduğundan her biri 4 bayt yer kaplar. Toplamda:
```
10 * 4 = 40 bayt
```

### Dizi Elemanlarına Erişim
Bir dizinin elemanlarına indeks numaralarıyla erişilir. İndeksler `0`'dan başlar ve dizinin boyutunun bir eksiğine kadar gider. Örneğin, `var[10]` dizisinde son eleman `var[9]` olur.

```c
#include <stdio.h>

int main()
{
    int var[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};  // 10 elemanlı bir dizi

    for (int i = 0; i < 10; i++)
    {
        printf("var[%d] = %d\n", i, var[i]);
    }

    return 0;
}
```

---

## Matrisler

### İki Boyutlu Dizi (Matris) Tanımlama
C dilinde çok boyutlu diziler tanımlanabilir. İki boyutlu diziler (matrisler), satır ve sütunlardan oluşur.

```c
int matris[3][4];  // 3 satır, 4 sütunluk bir matris
```

Bu matris bellekte toplamda `3 * 4 = 12` eleman içerir. Her eleman `int` olduğundan her biri 4 bayt yer kaplar. Toplam bellek boyutu:
```
3 * 4 * 4 = 48 bayt
```

### Matris Elemanlarına Erişim
Matrisin elemanlarına satır ve sütun numaralarıyla erişilir. Örneğin, `matris[1][2]`, matrisin 2. satırındaki 3. sütundaki elemana erişir.

```c
#include <stdio.h>

int main()
{
    int matris[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    for (int i = 0; i < 3; i++)  // Satırları dolaş
    {
        for (int j = 0; j < 4; j++)  // Sütunları dolaş
        {
            printf("matris[%d][%d] = %d\n", i, j, matris[i][j]);
        }
    }

    return 0;
}
```

Bu örnekte, `for` döngüsü ile matrisin her bir elemanına erişerek ekrana yazdırıyoruz. 

--- 

Bu yazı diziler ve matrislerle ilgili temel kavramları içermektedir. İlerleyen derslerde bu konuları daha ayrıntılı inceleyeceğiz.

## Alıştırmalar:

1. C programlamada tek boyutlu ve iki boyutlu veri yapıları arasındaki temel farklar nelerdir?
   
2. Kayan noktalı sayıları saklamak için bir dizi nasıl oluşturursunuz ve bu dizideki çift sayıların toplamını hesaplamak için hangi yöntemleri kullanabilirsiniz?
   
3. Bir dizide saklanan pozitif tam sayıların ortalamasını hesaplama sürecini tanımlayın. Bunu C'de uygulamak için hangi adımları izlersiniz?
   
4. C'de iki vektör arasındaki skalar çarpımı nasıl gerçekleştirirsiniz? Bir kod örneği verebilir misiniz?
   
5. Çok boyutlu dizilerin programlamadaki önemi nedir ve belirli değerlerle bir matris nasıl başlatılır?
   
6. Farklı markaların aylık satış verilerini görüntüleyen bir program tasarlamak için hangi işlemleri dahil edersiniz?
   
7. İki boyutlu bir dizide, her marka için hangi ayın en yüksek satışları olduğunu nasıl belirlersiniz?
   
8. Bir matrisin maksimum değerini bulmak ve ardından ilgili sütunda minimum değeri belirlemek için hangi yaklaşımı benimseyeceksiniz?
   
9. Farklı dersler için öğrencilerin notlarını saklamak amacıyla üç boyutlu bir dizi nasıl uygularsınız? Ortalama notları bulmak için hangi hesaplamaları yaparsınız?
   
10. Dizi ve matris işlemleri için kodun düzenlenmesinde fonksiyonların önemi hakkında tartışın. Kodun okunabilirliğini ve tekrar kullanılabilirliğini nasıl artırır?
