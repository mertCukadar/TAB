'use client';
import React from "react";
import MarkdownPreview from '@uiw/react-markdown-preview';

const markdownContent = `
# 💫 Hakkımda:
Merhaba değerli TabCommunity Okuru! Ben Tab Mert, kanalımda yazılım projeleri geliştirirken hem eğleniyor hem de öğreniyoruz. Ayrıca, sizlerle deneyimlerimi paylaşmak ve eğitici içerikler üretmek için buradayım.
Bu maker sitesinde, teknoloji dünyasının sınırlarını zorlarken bir yandan da eğlenmeyi hedefliyoruz. Yazılım projelerinden tutun da ilginç deneyimlere kadar geniş bir yelpazede içerik sunuyoruz. Sizlerle beraber yeni projeler geliştirmek ve teknolojiye dair bilgi ve deneyimlerimizi paylaşmak için sabırsızlanıyorum.
Kanalımda ve sitemde eğlence ve öğrenme bir arada! Eğer siz de teknolojiye ilgi duyuyor ve yeni şeyler öğrenmek istiyorsanız, burası tam size göre. Hadi gelin, birlikte teknoloji yolculuğuna çıkalım!

## 🌐 Sosyal Medya:
[![Mail](https://img.shields.io/badge/Mail-%23D14836.svg?logo=gmail&logoColor=white)](mailto:cukadar.mertkaan@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?logo=github&logoColor=white)](https://github.com/mertCukadar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/mert-kaan-%C3%A7ukadar-740614122/)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=youtube&logoColor=white)](https://www.youtube.com/@TabMert)
[![GrabCAD](https://img.shields.io/badge/GrabCAD-%23F44336.svg?logo=grabcad&logoColor=white)](https://grabcad.com/mert.kaan.cukadar-3)

# 💻 Teknik Yetenekler:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Bash](https://img.shields.io/badge/bash-%2312100E.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Numpy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![Matplotlib](https://img.shields.io/badge/matplotlib-%23304FFE.svg?style=for-the-badge&logo=matplotlib&logoColor=white)
![Pygame](https://img.shields.io/badge/pygame-%23F7DF1E.svg?style=for-the-badge&logo=pygame&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![.Net](https://img.shields.io/badge/.net-512BD4?style=for-the-badge&logo=dot-net&logoColor=white)

# 📊 GitHub İstatistiklerim:
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=mertCukadar&theme=radical&include_all_commits=true&count_private=true&show_icons=true&hide=issues" alt="Mert'in GitHub İstatistikleri" height="200"/>
  <img src="https://streak-stats.demolab.com?user=mertCukadar&theme=radical" alt="Mert'in GitHub Serileri" height="200"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mertCukadar&include_all_commits=true&count_private=true&theme=radical" alt="Mert'in En Çok Kullandığı Diller" height="200"/>
</div>

## 📜 Makaleler
- MSI (ISSN: 1305 - 2195) | Rover Özel Dosya Space Troopers

## 📚 Eğitim:
- Hacettepe Üniversitesi'nde Fizik Mühendisliği Lisans (2019-2022(Bırakıldı))
- Muğla Sıtkı Koçman Üniversitesi'nde Bilişim Sistemleri Mühendisliği Lisans (2023-Günümüz)

## 🎓 Sertifikalar:
- [European Rover Challenge 2023 Finalisti](https://roverchallenge.eu/certificate/2023-remote-space-troopers-mert-kaan-ukadar/)

## 🏆 Lisanslar:
- B-B1 sınıfı sürücü belgesi
- A sınıfı Amatör Telsizcilik Belgesi / TA2KMK
- Türkiye Bilardo Federasyonu Havuz Lisansı

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
`;

const Page = () => {
    return (
        <div className="flex justify-center items-center p-10 text-gray-100 w-full bg-backgroundDefault">
            <div className="flex flex-col items-center justify-center space-y-5 md:w-3/5">
                <MarkdownPreview 
                    source={markdownContent}
                    style={{backgroundColor: '#2d3250', padding: '20px', borderRadius: '8px', color:'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)'}} 
                />
            </div>
        </div>
    );
};

export default Page;
