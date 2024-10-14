---
id: 4
title: 'Özyinelemeli Fonksiyonlar ve Pointer Kavramı'
description: 'Pointerı tanımak ve Özyinelemeli Fonksiyonları anlamak üzerine bir çalışma'
category: 'veri-yapilari-algoritmalar'
date: '2024-10-14'
---

## Dinamik Bellek Yönetimi ve İşaretçiler

### Struct Yapısı

C dilinde `struct` anahtar kelimesi, birden fazla veri tipini tek bir çatı altında toplamak için kullanılır. Yapılar (structures), aynı ya da farklı türden veri elemanlarının bir arada bulunduğu veri yapılarıdır ve nesneye yönelik programlamadaki sınıfların basit bir versiyonu olarak düşünülebilir. Ancak `struct` yapıları, sadece veri saklar ve metod içermez.

#### Örnek: struct Kullanımı

```c
#include <stdio.h>
#include <stdlib.h>

struct Kisi {
    int yas;
    char cinsiyet;
};

int main() {
    struct Kisi birey;
    birey.yas = 30;
    birey.cinsiyet = 'E'; // Erkek

    printf("Yaş: %d\n", birey.yas);
    printf("Cinsiyet: %c\n", birey.cinsiyet);

    return 0;
}
```

Bu örnekte, `Kisi` adlı bir yapı tanımlandı ve içerisinde bir `yas` ve bir `cinsiyet` değişkeni barındırıyor. Bu yapının bir örneği olan `birey` değişkeni oluşturulup değer ataması yapıldı.

### İşaretçiler (Pointer)

İşaretçiler, bellekteki başka bir değişkenin adresini tutan değişkenlerdir. C dilinde işaretçileri kullanmak için `*` ve `&` operatörleri kullanılır:

- `*` (yıldız) operatörü, işaretçi tanımlarken kullanılır ve bir işaretçinin tuttuğu adresteki değere erişmek için de kullanılır.
- `&` (ampersand) operatörü, bir değişkenin bellek adresini almak için kullanılır.

#### Örnek: İşaretçi Kullanımı

```c
#include <stdio.h>

int main() {
    int sayi = 10;
    int *isaretci = &sayi;

    printf("Sayı değeri: %d\n", sayi);
    printf("Sayı adresi: %p\n", (void*)&sayi);
    printf("İşaretçinin gösterdiği değer: %d\n", *isaretci);
    printf("İşaretçinin tuttuğu adres: %p\n", (void*)isaretci);

    return 0;
}
```

Bu örnekte, `sayi` değişkeninin adresi `isaretci` işaretçisine atanıyor ve işaretçi üzerinden bellekteki değere erişiliyor.

---

## Dinamik Bellek Yönetimi (malloc, calloc, realloc, free)

Dinamik bellek yönetimi, belleğin çalışma zamanında (runtime) ayrılması ve serbest bırakılması anlamına gelir. C dilinde bu işlemler için standart kütüphanede `malloc`, `calloc`, `realloc` ve `free` fonksiyonları bulunur.

### malloc (Memory Allocation)

`malloc` fonksiyonu, belirli bir bellek boyutunu ayırır ve başlangıç adresini döner. Bellek ilk başta rastgele değerler içerir. 

#### Örnek: malloc ile Dinamik Bellek Ayırma

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *dizi;
    int boyut = 5;

    dizi = (int*)malloc(boyut * sizeof(int));

    if (dizi == NULL) {
        printf("Bellek ayrilamadi!\n");
        return 1;
    }

    for (int i = 0; i < boyut; i++) {
        dizi[i] = i * 2;
    }

    for (int i = 0; i < boyut; i++) {
        printf("%d ", dizi[i]);
    }
    printf("\n");

    free(dizi); // Belleği serbest bırak
    return 0;
}
```


## Dinamik Bellek Ayırmada Tip Dönüşümü (int*)

C dilinde dinamik bellek yönetimi için kullanılan `malloc`, `calloc`, ve `realloc` fonksiyonları, herhangi bir veri tipiyle doğrudan ilişkili değildir ve dönüş tipi olarak `void*` dönerler. `void*`, herhangi bir veri tipine işaret edebilen genel bir işaretçi türüdür. Bu nedenle, döndürülen işaretçiyi istediğimiz veri türüne dönüştürmemiz gerekir.

### (int*) Neden Kullanılır?

`(int*)` ifadesi, `malloc` fonksiyonunun döndürdüğü `void*` türündeki genel işaretçiyi, bir `int*` türüne dönüştürmek için kullanılır. Böylece, ayrılan belleğin bir `int` türünde veri tutacağını belirlemiş oluruz. 

Örneğin:

```c
int *dizi;
dizi = (int*)malloc(boyut * sizeof(int));
```

Bu ifadede:
- `malloc` fonksiyonu `boyut * sizeof(int)` kadar bellek ayırır ve bu bellek alanının başlangıç adresini bir `void*` işaretçi olarak döndürür.
- `(int*)` ifadesi, `void*` türündeki bu işaretçiyi `int*` türüne dönüştürerek, işaretçinin bir `int` dizisini işaret ettiğini belirtir.

### Tip Dönüştürme Kullanılmadığında Ne Olur?

C dilinde `(int*)` gibi tip dönüşümlerini kullanmak zorunlu değildir. Örneğin, aşağıdaki kod da çalışacaktır:

```c
int *dizi;
dizi = malloc(boyut * sizeof(int));
```

Bu kod, tip dönüşümü olmadan da derlenir ve çalışır. C dilinde, `void*` türündeki bir işaretçi herhangi bir türe otomatik olarak dönüştürülebilir, bu yüzden tip dönüşümü kullanılmasa bile bellek doğru şekilde ayrılacaktır.

### Peki, Neden Tip Dönüştürme Kullanılır?

1. **Kodun Okunabilirliğini Artırır:** Tip dönüşümü kullanarak, bellek alanının hangi türdeki veriyi tutacağını açıkça belirtmiş oluruz. Bu, kodun okunabilirliğini artırır ve diğer geliştiricilerin kodun amacını daha iyi anlamasına yardımcı olur.

2. **C++ ile Uyumluluk:** C++ dilinde, `void*` türündeki işaretçiler otomatik olarak başka bir türe dönüştürülmez. Bu yüzden, C++ ile yazılmış bir programda `malloc` kullanılırken tip dönüşümü zorunludur. `(int*)malloc(...)` gibi bir ifade, C kodunun hem C hem de C++'ta sorunsuz çalışmasını sağlar.

3. **Derleyici Uyarılarından Kaçınma:** Bazı derleyiciler, tip dönüşümü kullanılmadığında uyarı verebilir. Bu, özellikle kodun güvenliğini ve taşınabilirliğini artırmak amacıyla yapılan derleme ayarları sıkı olduğunda geçerlidir.

### Örnek: Tip Dönüştürme ile ve Olmadan

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int boyut = 5;

    // Tip dönüştürme ile
    int *dizi1 = (int*)malloc(boyut * sizeof(int));
    if (dizi1 == NULL) {
        printf("Bellek ayrilamadi!\n");
        return 1;
    }

    // Tip dönüştürme olmadan
    int *dizi2 = malloc(boyut * sizeof(int));
    if (dizi2 == NULL) {
        printf("Bellek ayrilamadi!\n");
        return 1;
    }

    for (int i = 0; i < boyut; i++) {
        dizi1[i] = i;
        dizi2[i] = i + 10;
    }

    printf("Dizi1: ");
    for (int i = 0; i < boyut; i++) {
        printf("%d ", dizi1[i]);
    }

    printf("\nDizi2: ");
    for (int i = 0; i < boyut; i++) {
        printf("%d ", dizi2[i]);
    }
    printf("\n");

    free(dizi1);
    free(dizi2);

    return 0;
}
```

Bu örnek, hem tip dönüşümü ile hem de tip dönüşümü olmadan dinamik bellek ayırmanın mümkün olduğunu gösterir.

---

### Sonuç

- `(int*)` kullanımı, bellekten dönen `void*` türündeki işaretçinin istenen veri tipine dönüştürülmesini sağlar.
- C dilinde tip dönüşümü kullanımı zorunlu değildir, ancak kodun okunabilirliğini artırır ve C++ uyumluluğu sağlar.
- Tip dönüşümü kullanarak hangi türde bir bellek alanı ayrıldığını açıkça belirtmek, iyi bir programlama pratiği olarak kabul edilir.


### calloc (Contiguous Allocation)

`calloc`, `malloc` ile benzer bir işlev görür ancak bellek sıfırlanarak ayrılır. Bellek blokları belirli bir boyutta ve sayıda ayrılır.

#### Örnek: `calloc` ile Bellek Ayırma

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *dizi;
    int boyut = 5;

    dizi = (int*)calloc(boyut, sizeof(int));

    if (dizi == NULL) {
        printf("Bellek ayrilamadi!\n");
        return 1;
    }

    for (int i = 0; i < boyut; i++) {
        printf("%d ", dizi[i]); // Sıfırlanmış değerler
    }
    printf("\n");

    free(dizi);
    return 0;
}
```

### realloc (Reallocation)

`realloc`, daha önce ayrılmış bir bellek bloğunun boyutunu değiştirmek için kullanılır.

#### Örnek: realloc ile Bellek Boyutunu Değiştirme

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *dizi;
    int boyut = 5;

    dizi = (int*)malloc(boyut * sizeof(int));

    if (dizi == NULL) {
        printf("Bellek ayrilamadi!\n");
        return 1;
    }

    for (int i = 0; i < boyut; i++) {
        dizi[i] = i * 2;
    }

    boyut = 10;
    dizi = (int*)realloc(dizi, boyut * sizeof(int));

    if (dizi == NULL) {
        printf("Bellek yeniden ayrilamadi!\n");
        return 1;
    }

    for (int i = 5; i < boyut; i++) {
        dizi[i] = i * 2;
    }

    for (int i = 0; i < boyut; i++) {
        printf("%d ", dizi[i]);
    }
    printf("\n");

    free(dizi);
    return 0;
}
```

### free (Bellek Serbest Bırakma)

Dinamik olarak ayrılmış belleği serbest bırakmak için `free` fonksiyonu kullanılır. Belleğin serbest bırakılması, bellek sızıntılarını (memory leaks) önlemek için önemlidir.

### Özyinelemeli (Recursive) Fonksiyonlar

Özyineleme (recursive) bir fonksiyonun kendisini çağırarak problemi daha küçük parçalara bölmesi yöntemidir. Bu teknik, özellikle yinelenen işlemleri gerçekleştirirken, karmaşık problemleri daha basit ve yönetilebilir alt problemlere ayırmak için kullanılır. 

Bir özyinelemeli fonksiyonun çalışabilmesi için iki temel bileşen gerekir:
1. **Sonlanma Şartı (Base Case):** Fonksiyonun özyinelemeyi durduracağı durum. Sonlanma şartı sağlandığında fonksiyon kendini çağırmayı bırakır.
2. **Özyinelemeli Çağrı (Recursive Call):** Fonksiyonun kendisini daha küçük bir problem için çağırması.

Özyinelemeli fonksiyonlar yazılırken dikkat edilmesi gereken en önemli husus, sonlanma şartının doğru belirlenmesi ve sonsuz döngüye girilmemesidir.

#### Özyineleme ile Faktöriyel Hesaplama

Bir sayının faktöriyeli, 1'den o sayıya kadar olan tüm sayıların çarpımına eşittir. Özyinelemeli bir fonksiyon kullanarak faktöriyel hesaplaması şu şekilde yapılabilir:

```c
#include <stdio.h>

// Özyinelemeli fonksiyon tanımı
int faktoriyel(int n) {
    if (n <= 1) // Sonlanma şartı
        return 1;
    else
        return n * faktoriyel(n - 1); // Özyinelemeli çağrı
}

int main() {
    int sayi = 5;
    printf("%d! = %d\n", sayi, faktoriyel(sayi));
    return 0;
}
```

Bu örnekte, `faktoriyel` fonksiyonu kendini çağırarak `n! = n * (n-1)!` hesaplamasını gerçekleştirir. Sonlanma şartı olan `n <= 1` sağlandığında özyinelemeyi durdurur.

#### Özyineleme ile Fibonacci Serisi

Fibonacci serisi, her sayının kendisinden önceki iki sayının toplamı olduğu bir sayı dizisidir. İlk iki sayı genellikle 0 ve 1 olarak başlar. Özyinelemeli bir fonksiyon kullanarak Fibonacci serisini hesaplayabiliriz.

```c
#include <stdio.h>

// Özyinelemeli Fibonacci fonksiyonu
int fibonacci(int n) {
    if (n <= 1) // Sonlanma şartı
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2); // Özyinelemeli çağrı
}

int main() {
    int n = 10;
    printf("Fibonacci(%d) = %d\n", n, fibonacci(n));
    return 0;
}
```

Bu örnek, Fibonacci serisinin `n`'inci elemanını özyinelemeli olarak hesaplar.

---

### Dinamik Bellek Yönetimi ve Malloc, Calloc, Realloc Örnekleri

Dinamik bellek ayırma fonksiyonları, bellekte programın çalışma zamanında veri yapıları oluşturmayı sağlar. `malloc`, `calloc`, ve `realloc` fonksiyonları ile dinamik bellek ayırma yapabiliriz.

#### malloc ile Dinamik Bellek Ayırma

`malloc` fonksiyonu, belirtilen boyutta bellek ayırır ve ayrılan belleğin başlangıç adresini döner. Ayrılan bellek sıfırlanmaz, rastgele veri içerebilir.

```c
int *dizi;
dizi = (int*)malloc(5 * sizeof(int)); // 5 elemanlık bir int dizisi için bellek ayırır
```

#### calloc ile Bellek Ayırma

`calloc`, bellek ayırırken aynı zamanda ayrılan belleği sıfırlarla doldurur. İki parametre alır: kaç tane eleman olduğu ve her bir elemanın boyutu.

```c
int *dizi;
dizi = (int*)calloc(5, sizeof(int)); // 5 elemanlık bir int dizisi için sıfırlarla dolu bellek ayırır
```

#### realloc ile Bellek Yeniden Boyutlandırma

`realloc` fonksiyonu, önceden ayrılmış bir bellek alanını belirtilen yeni boyuta göre yeniden boyutlandırır. Önceki bellek alanındaki veriler korunur.

```c
int *dizi;
dizi = (int*)malloc(5 * sizeof(int));
dizi = (int*)realloc(dizi, 10 * sizeof(int)); // Bellek alanını 10 elemanlık yapar
```

---

### Pratik Ödevler

1. **Özyinelemeli Faktöriyel ve Fibonacci Fonksiyonları**
   - Hem özyineleme hem de döngü ile faktöriyel ve Fibonacci hesaplamaları yapınız.
   - Her iki yöntemin performansını karşılaştırın ve sonuçları açıklayın.

2. **Dinamik Bellek Ayırma ve Yönetimi**
   - Kullanıcıdan bir dizi boyutu isteyin ve `malloc` veya `calloc` ile bu boyutta bir dizi için bellek ayırın.
   - Kullanıcıdan dizi elemanlarını girmesini isteyin ve elemanları ekrana yazdırın.
   - `realloc` kullanarak dizinin boyutunu artırın ve ek bellek alanını kullanarak yeni elemanlar ekleyin.
   - Bellekteki tüm veriyi ekrana yazdırdıktan sonra belleği serbest bırakın (`free`).

3. **Özyinelemeli Sayı Toplamı**
   - 1'den n'e kadar olan sayıların toplamını özyinelemeli bir fonksiyon ile hesaplayın.
   - Örneğin, `toplam(5)` fonksiyonu `1 + 2 + 3 + 4 + 5 = 15` sonucunu döndürmelidir.

4. **Dizi Elemanlarını Tersine Çevirme**
   - Kullanıcıdan dizi boyutunu ve elemanlarını isteyin, dinamik bellek kullanarak bu diziyi oluşturun.
   - Diziyi tersine çeviren bir özyinelemeli fonksiyon yazın ve sonucu ekrana yazdırın.

5. **Dinamik Bellek ile Matris İşlemleri**
   - `malloc` veya `calloc` kullanarak dinamik bir iki boyutlu matris (örneğin 3x3) oluşturun.
   - Matris elemanlarını kullanıcıdan alın ve matrisin transpozunu hesaplayıp ekrana yazdırın.
   - Bellek serbest bırakmayı unutmayın (`free`).
