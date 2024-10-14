---
id: 4
title: 'Oyun Geliştirmede hissiyat'
description: 'Oyun oynarken neden hisslere önem veriyoruz neler yapabiliriz.'
date: '2024-10-14'
---
### Oyunda Hissiyat

#### Giriş
Oyun oynarken sizi oyunun içinde tutan ve devam etmenizi sağlayan en önemli unsurlardan birinin oyun hissiyatı olduğunu biliyor muydunuz? Oyun geliştiriciliği sürecinde bu konuya özellikle önem vermek, oyuncuların deneyimini doğrudan etkileyen kritik bir faktördür. Son iki haftadır, geliştirmekte olduğum oyun üzerinde çalışarak oyun oynanışı hissiyatını en iyi seviyeye getirmeyi amaçladım. Bu süreçte birçok farklı yöntem denedim ve farkında olmadan geliştirdiğim "Hunter" oyunu, denediğim farklı mekanikler arasında en iyi hissiyatı veren oyun haline geldi.

Peki, burada bahsettiğim "hissiyat" tam olarak ne anlama geliyor? Basit bir örnekle açıklamak gerekirse, yüksek bir yerden düştüğünüzde ve yere çarptığınızda, oyunun size bu deneyimi hissettirmesi gerekiyor. Bu hissiyatı yaratmanın temel yollarından biri ise kamera sallantısı gibi görsel geri bildirimlerle sağlanabilir.

Oyun içi hissiyatı geliştirmek için yapmamız gerekenleri birkaç başlık altında inceleyelim.

---

### 1. Kullanıcı Girdisi ve Geri Bildirim
Kullanıcılar klavye, fare veya oyun kumandası gibi cihazlar üzerinden yaptıkları eylemlerin ekranda bir karşılığını görmek isterler. Bu, oyuncunun yaptığı her hareketin oyunda doğrudan bir etkisi olması gerektiği anlamına gelir. Ne kadar basit bir mekanik olursa olsun, oyuncu yaptığı eylemi hissedebiliyorsa kendini oyunun atmosferi içinde bulur. 

Örneğin, eski "Stickman Fight" oyunlarını hatırlayın. Hikâyesi veya sanatsal mükemmelliği olmamasına rağmen, basit oynanış mekanikleriyle oyuncuyu kendine çekmeyi başarır. Bunun nedeni, her tuş basışının veya hareketin ekranda doğrudan bir yansımasının olması ve bu geri bildirimin oyuncuya hissettirilmesidir. Yani, dışarıdan yapılan her girdiyi oyun içinde hissetmek, oyuncunun oyuna olan bağlılığını artırır.

---

### 2. Cevap Hızı ve Girdilere Tepki Süresi
Oyunda yaptığınız her bir hareketin karşılığını hızlı bir şekilde almak önemlidir. Oyuncunun yaptığı bir girdinin oyundaki etkisi ne kadar hızlı gerçekleşirse, oyun hissiyatı o kadar akıcı olur. Bu nedenle, yazılan kodun ve oyun motorunun optimize edilmesi, girdilerin gecikmesiz bir şekilde oyuna yansıtılmasını sağlar.

Cevap hızını artırmak için yapılabilecek birkaç şey:
- **Girdilerin Anlık Tepkisi:** Karakterin hareketleri veya nesnelerin reaksiyonları anında hissedilmelidir. Örneğin, bir tuşa bastığınızda karakter hemen harekete geçmeli ve gecikme olmamalıdır.
- **Donanım Desteği:** Oyunun, düşük gecikmeli ekranlar ve yüksek yenileme hızına sahip monitörlerle uyumlu çalışması da oyuncu deneyimini iyileştirir.
- **Optimize Edilmiş Kod ve Algoritmalar:** Gereksiz hesaplamalardan kaçınarak kodun verimli çalışması sağlanmalıdır.

---

### 3. Görsel Efektler
Görsel efektler, oyunun hissiyatını güçlendiren unsurlardan biridir. Bir eylemin sonucunda ortaya çıkan animasyonlar, ekran sallantıları, ışık patlamaları gibi efektler, oyuncunun eylemlerine verdiği tepkilerin daha gerçekçi hissettirilmesini sağlar.

- **Kamera Sallantısı:** Yüksekten düşme, patlama veya sert bir çarpışma gibi durumlarda, ekranın hafifçe sallanması oyuncuya olayın etkisini hissettirebilir.
- **Hız ve Hareket Efektleri:** Karakterin hızlı hareket ettiği anlarda hareket bulanıklığı (motion blur) eklemek, hız hissini artırır.
- **Partikül Efektleri:** Örneğin, yere çarpan bir nesnenin toz bulutları oluşturması veya ateş etme sırasında çıkan kıvılcımlar gibi detaylar oyuncunun deneyimini zenginleştirir.

---

### 4. Ses ve Çevresel Ses Efektleri
Görsel unsurlar kadar ses efektleri de oyun hissiyatını artırmada büyük rol oynar. Hatta çoğu zaman doğru ses kullanımı, görsel efektlerden daha etkileyici olabilir.

- **Ambiyans ve Arka Plan Sesleri:** Ormanın derinliklerinde avlanırken rüzgarın sesi veya uzaktan gelen hayvan sesleri, oyuncunun kendini gerçekten o ortamda hissetmesini sağlar.
- **İnteraktif Sesler:** Oyuncunun yaptığı her hareketin sesli bir geri bildirimi olmalıdır. Yere basarken çıkan sesler, suya dalarken duyulan su sesleri veya silah ateşleme sesi gibi.
- **Dinamik Ses Seviyeleri:** Oyundaki sesler, olayların şiddetine ve oyuncunun konumuna göre dinamik olarak ayarlanabilir. Örneğin, patlamaya yakınsanız ses daha yüksek ve kuvvetli olmalıdır.

---

### 5. Fizik ve Sürükleme (Drag) Dinamikleri
Oyundaki fiziksel olaylar, hissiyatı gerçekçi hale getirir. Fizik motorunun doğru kullanımı ile nesnelerin düşüş hızı, karakterin sıçrama yüksekliği veya sürtünme kuvveti gibi detaylar, oyunun gerçekçilik hissini güçlendirir.

- **Ağırlık Hissi:** Yüksekten düşen bir nesne yere çarptığında, hız ve yerçekimi kuvveti doğru hesaplanmışsa, oyuncu ağırlığı hissedebilir.
- **Limit ve Hız Ayarları:** Oyundaki karakterlerin hız sınırları gerçekçi olmalıdır. Gereğinden fazla hızlı hareket eden bir karakter, oyunun gerçekçilik hissini kaybetmesine neden olabilir.
- **Sürükleme ve Hava Direnci:** Özellikle platform oyunlarında, karakterlerin havadayken bile sürükleme etkisini hissetmesi, oyuna daha doğal bir hareket kazandırır.

---

### 6. Oyuncu Deneyimine Dayalı Hız ve Limit Ayarları
Oyunun temposu ve karakterlerin hareket hızları, oyuncu deneyimine uygun şekilde ayarlanmalıdır. Örneğin, aksiyon oyunlarında hızlı tempolu bir oynanış gerekliyken, bir keşif oyununda daha yavaş ve detaylı hareketler gerekebilir.

- **Animasyonların Akıcılığı:** Yavaş veya hızlı animasyonlar yerine, duruma uygun hızlarda ve pürüzsüz geçişler sağlanmalıdır.
- **Zorluk Seviyesine Göre Ayarlamalar:** Oyunun zorluk seviyesine göre hareket hızları veya tepki süreleri ayarlanabilir. Daha zor seviyelerde oyuncudan daha hızlı tepkiler beklenebilir.

---

### Sonuç
Oyun hissiyatını artırmak, yalnızca bir oyun için görsel veya işitsel efektler eklemekten ibaret değildir. Oyuncunun eylemlerine verilen tepkilerin ne kadar gerçekçi ve hızlı olduğu, oyun içindeki deneyimi doğrudan etkiler. Bu nedenle, oyunun her aşamasında kullanıcı girdilerinin, görsel ve işitsel efektlerin ve fizik kurallarının doğru şekilde uygulanması, oyuncunun kendini gerçekten o ortamın bir parçası gibi hissetmesini sağlar.

İyi bir oyun hissiyatı yaratmak için bu unsurları dengeli ve doğru bir şekilde kullanmak, oyunun kalitesini önemli ölçüde artırır ve oyuncuların oyuna bağlılığını sağlar.