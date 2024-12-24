# FullCoffeeApp - React ile Katmanlı Mimari Kullanımı

Bu proje, React.js kullanılarak geliştirilmiş bir kullanıcı arayüzü uygulamasıdır. Backend API'si ise **FullCoffeeApiApp** adında, katmanlı mimari formatında oluşturulmuştur. Uygulama, kahve ürünlerinin listelenmesini, detaylarının incelenmesini ve sipariş yönetimini sağlar.

## Proje Özellikleri

- **Ürün Listesi:** Kullanıcılar mevcut kahve ürünlerini listeleyebilir.
- **Ürün Detayları:** Seçilen kahve ürününe ait detaylı bilgileri görüntüleyebilir.
- **Sipariş Yönetimi:** Ürünler sepetinize eklenebilir ve sipariş süreci yönetilebilir.
- **API Kullanımı:** Backend API (FullCoffeeApiApp) ile dinamik veri akışı sağlanır.
- **Responsive Tasarım:** Mobil ve masaüstü cihazlarda sorunsuz çalışır.

## Proje Videosu

Projenin detaylı bir demosunu izlemek için aşağıdaki bağlantıya tıklayın:

[![FullCoffeeApp Videosu](https://img.youtube.com/vi/9DlQpsIL6j8/0.jpg)](https://www.youtube.com/watch?v=9DlQpsIL6j8)

> Videoyu doğrudan izlemek için [buraya tıklayın](https://www.youtube.com/watch?v=9DlQpsIL6j8).

## Backend (FullCoffeeApiApp)

### Katmanlı Mimari Özellikleri:
1. **Entity Layer:** Veritabanı tablolarına karşılık gelen modellerin tanımlandığı katman.
2. **Data Access Layer (DAL):** Veritabanı işlemlerinin gerçekleştirildiği katman.
3. **Business Layer:** İş kurallarının tanımlandığı katman.
4. **API Layer:** İstemcilerle (React uygulaması gibi) iletişimi sağlayan katman.

Backend API, React uygulamasına JSON formatında veri sağlamaktadır.

## React Uygulaması

