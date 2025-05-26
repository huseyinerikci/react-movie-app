# MovieApp Projesi

MovieApp, The Movie Database (TMDb) API'sini kullanarak popüler, trend ve en yüksek puanlı filmleri listeleyen, favorilere ekleme ve film detaylarını görüntüleme özelliklerine sahip React, TypeScript, Redux Toolkit Query ve Tailwind CSS gibi teknolojiler kullanılarak geliştirilmiş bir film sitesi uygulamasıdır.

## Özellikler

- Popüler, En Yüksek Oy Alan ve Trend Filmleri listeleme
- Film detaylarını görüntüleme (puan, tarih, bütçe, ülke, şirket vb.)
- Filmleri favori listesine ekleyip çıkarma
- Favoriler localStorage ile kalıcı olarak saklanır
- Yükleniyor ve hata durumları için komponentler
- Duyarlı (responsive) tasarım

## Kullanılan Teknolojiler

- **React** : Uygulamanın temel yapısı.
- **Redux Toolkit Query** : Durum yönetimi ve API entegrasyonu.
- **TypeScript** : Tip Kontrolü sağlandı.
- **Tailwind CSS** : Uygulama stillendirilmesi.
- **The Movie DB API** : "https://api.themoviedb.org/3/" api kullanıldı.
- **React Router** : Sayfa yönlendirme.
- **React Millify** : Sayıların okunabilmesi sağlandı:

## Uygulama Önizleme

![MovieApp GIF Preview](public/preview.gif)

## Canlı Önizleme

Projenin canlı versiyonunu buradan izleyebilirsiniz: https://react-query-movie-app.netlify.app/

## Kurulum

1. Projeyi klonlayın:

   `https://github.com/huseyinerikci/react-movie-app.git`

2. Dosya dizinine gidin:

   `cd react-movie-app`

3. Bağımlılıkları yükleyin:

   `npm install`

4. TMDb API anahtarını .env dosyasına ekleyin:

   `VITE_API_KEY=YOUR_TMDB_API_KEY`

5. Projeyi başlatın:

   `npm run dev`

## Proje Yapısı (Kısaca)

- components/: Uygulamanın bileşenleri (MovieCard, Category, Header, Error, Loader)

- pages/: Sayfa bileşenleri (Home, FavoritesPage, MovieDetail)

- redux/: Store, slice ve API servis tanımları

- types.ts: Uygulama genelinde kullanılan TypeScript tipleri

- utils/constants.ts: Sabit değerler
