import { useEffect, useState } from 'react';
import './App.css';

const nav = [
  ['/', 'Home'],
  ['/about', 'About Me'],
  ['/favorites', 'Favorites'],
  ['/hobbies', 'Hobbies'],
  ['/journey', 'Journey'],
  ['/works', 'Published Books'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
];
const photos = [
  { title: 'A peaceful morning', type: 'Malang', image: '/images/galerisatu.jpeg' },
  { title: 'A quiet place', type: 'Malang', image: '/images/galeridua.jpeg' },
  { title: 'Blue hour', type: 'Malang', image: '/images/galeritiga.jpeg' },
  { title: 'Today notes', type: 'Malang', image: '/images/galeriempat.jpeg' },
  { title: 'Weekend light', type: 'Malang', image: '/images/galerilima.jpeg' },
  { title: 'Simple things', type: 'Malang', image: '/images/galerienam.jpeg' },
  { title: 'A quiet afternoon', type: 'Malang', image: '/images/galeritujuh.jpeg' },
  { title: 'Small joys', type: 'Bandung', image: '/images/galeridelapan.jpeg' },
  { title: 'Golden hour', type: 'Bandung', image: '/images/galerisembilan.jpeg' },
  { title: 'A favorite day', type: 'Bandung', image: '/images/galerisepuluh.jpeg' },
  { title: 'A little escape', type: 'Bandung', image: '/images/galerisebelas.jpeg' },
  { title: 'Soft blue sky', type: 'Bandung', image: '/images/galeriduabelas.jpeg' },
  { title: 'A moment to keep', type: 'MDPL', image: '/images/galeritigabelas.jpeg' },
  { title: 'Slow Sunday', type: 'MDPL', image: '/images/galeriempatbelas.jpeg' },
  { title: 'My happy place', type: 'MDPL', image: '/images/galerilimabelas.jpeg' },
];
const favorites = [
  { category: 'FOOD', title: 'Sushi', note: 'A favorite bite I always enjoy.', image: '/images/sushi.jpg' },
  { category: 'DRINK', title: 'Matcha', note: 'A smooth, comforting cup for a little pause.', image: '/images/matcha.jpg' },
  { category: 'COLOR', title: 'Blue', note: 'A calm color that always feels like me.', image: '/images/blue.jpg' },
  { category: 'CARTOON', title: 'Doraemon', note: 'A childhood favorite full of fun and imagination.', image: '/images/doraemon.jpg' },
  { category: 'MY IDOL', title: 'Iqbaal Ramadhan', note: 'Someone whose work and creativity I admire.', image: '/images/iqbaal-ramadhan.jpg' },
  { category: 'PLACE', title: 'Nature', note: 'Somewhere peaceful to slow down and take it all in.', image: '/images/nature.jpg' },
];
const filmFavorites = [
  { title: 'Perayaan Mati Rasa', image: '/images/films/perayaan-mati-rasa.jpg' },
  { title: 'Mencuri Raden Saleh', image: '/images/films/mencuri-raden-saleh.jpg' },
  { title: 'Milea: Suara dari Dilan', image: '/images/films/milea-suara-dari-dilan.jpg' },
  { title: 'Milea: Suara dari Dilan EXTENDED', image: '/images/films/milea-extended.jpg' },
  { title: 'Bumi Manusia', image: '/images/films/bumi-manusia.jpg' },
  { title: 'Dilan 1991', image: '/images/films/dilan-1991.jpg' },
  { title: 'Dilan 1990', image: '/images/films/dilan-1990.jpg' },
  { title: 'Ada Cinta di SMA', image: '/images/films/ada-cinta-di-sma.jpg' },
  { title: 'Squid Game', image: '/images/films/squid-game.jpg' },
  { title: 'Squid Game: The Challenge', image: '/images/films/squid-game-the-challenge.jpg' },
  { title: 'Squid Game: Season 2', image: '/images/films/squid-game-season-2.jpg' },
  { title: 'Squid Game S3', image: '/images/films/squid-game-s3.webp' },
  { title: 'Daily Dose Of Sunshine', image: '/images/films/daily-dose-of-sunshine.jpg' },
  { title: 'Twenty-Five Twenty-One', image: '/images/films/twenty-five-twenty-one.jpg' },
  { title: 'As the Gods Will', image: '/images/films/as-the-gods-will.jpg' },
  { title: 'Battle Royale', image: '/images/films/battle-royale.jpg' },
];
const books = [
  {
    title: 'Dua Tiga',
    kind: 'PUBLISHED BOOK',
    year: '',
    cover: '/images/bukusatu.jpeg',
    note: 'Tulisan ini aku persembahkan untuk manusia yang aku temui di tahun 2014, sosok yang pertama kali berhasil membuatku jatuh cinta di tahun itu hingga tahun-tahun berikutnya. Namanya dan tentang dia melegenda di setiap karyaku dan di setiap bait paragraf itu. Selamat menjadi abadi, manusia favorit paling lama.',
  },
  {
    title: 'Laki - Laki Boleh Bercerita',
    kind: 'PUBLISHED BOOK',
    year: '',
    cover: '/images/bukudua.png',
    note: `Pernahkah kita bertanya, berapa banyak hal yang disembunyikan seseorang di balik kata *aku baik-baik saja*?

Barangkali, ada lelah yang tak pernah menemukan tempat untuk pulang. Ada air mata yang diurungkan sebelum jatuh. Ada begitu banyak kata yang tertahan hanya karena dunia telanjur percaya bahwa laki-laki harus selalu kuat.

Padahal, siapa yang mengajarkan bahwa menjadi kuat berarti tidak boleh rapuh?

Dan jika selama ini kita hanya mendengar mereka berkata bahwa semuanya baik-baik saja, pernahkah kita benar-benar ingin tahu apa yang sebenarnya mereka rasakan?

**Sebab, laki-laki juga manusia. Dan manusia, sekuat apa pun ia terlihat, tetap berhak untuk bercerita.**`,
  },
  {
    title: 'Hidup Bukan Tentang Menjadi yang Mereka Inginkan',
    kind: 'PUBLISHED BOOK',
    year: '',
    cover: '/images/bukutiga.png',
    note: `Kita menghabiskan banyak waktu untuk menjadi seseorang yang bisa dibanggakan orang lain. Sampai lupa bahwa di balik semua harapan itu, ada diri sendiri yang juga ingin didengarkan.

Sebab hidup bukan perlombaan untuk memenuhi semua ekspektasi. Bukan pula tentang seberapa jauh kita berhasil membuat orang lain bangga.

Barangkali, sudah waktunya kita berhenti sejenak. Bukan untuk menyerah, melainkan untuk bertanya kepada diri sendiri:

**Jika bukan untuk memenuhi harapan mereka, lalu untuk apa kita ingin menjalani hidup ini?**`,
  },
  {
    title: 'BIRU',
    kind: 'PUBLISHED BOOK',
    year: '',
    cover: '/images/bukuempat.png',
    note: `Lima tahun bersama, tetapi berakhir karena pengkhianatan yang tak pernah ia bayangkan. Biru, laki-laki yang dulu menjadi rumah bagi kekasihnya, perlahan berubah menjadi seseorang yang asing. Club, alkohol, rokok, vape, dan amarah menjadi pelariannya, sementara perempuan yang mencintainya mati-matian berusaha menyelamatkannya, bahkan rela menempuh perjalanan Surabaya–Malang demi memastikan Biru baik-baik saja.

Sampai akhirnya, ia mengetahui alasan di balik perubahan Biru: pengkhianatan yang melibatkan sahabatnya sendiri dan perempuan lain yang tak asing dalam lingkaran pertemanannya.

Mereka kandas. Dua tahun berlalu tanpa kabar, sementara perempuan itu tumbuh menjadi sosok sukses dengan karier dan prestasi yang membanggakan.

Lantas, bagaimana dengan Biru? **Ini bukan sekadar kisah tentang cinta yang kandas. Ini adalah kisah tentang Biru, seorang laki-laki yang kehilangan arah, menghancurkan cintanya sendiri, dan harus hidup dengan segala hal yang tak bisa lagi ia perbaiki.**`,
  },
];
const renderBookDescription = (description) =>
  description.split(/\n{2,}/).map((paragraph, paragraphIndex) => (
    <p key={paragraphIndex}>
      {paragraph.split(/(\*\*.+?\*\*|\*.+?\*)/g).map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={partIndex}>{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </p>
  ));
const aboutSummary = 'Aku selalu percaya bahwa setiap orang punya dunianya sendiri. Dunia yang mungkin tidak sepenuhnya terlihat oleh orang lain. Begitu juga denganku.';
const hobbies = [
  { title: 'Writing', image: '/images/menulis.jpg' },
  { title: 'Reading', image: '/images/membaca.jpg' },
  { title: 'Exploring', image: '/images/petualangan.jpg' },
  { title: 'Playing games', image: '/images/game.jpg' },
  { title: 'Coding', image: '/images/coding.jpg' },
];
const journeyItems = [
  { type: 'EDUCATION', title: 'TK Bougenvile', place: 'Surabaya', period: '2006 - 2008' },
  { type: 'EDUCATION', title: 'SD Negeri Panjang Jiwo II / 266', place: 'Surabaya', period: '2008 - 2014' },
  { type: 'EDUCATION', title: 'SMP Negeri 35 Surabaya', place: 'Surabaya', period: '2014 - 2017' },
  { type: 'EDUCATION', title: 'MA Amanatul Ummah Surabaya', place: 'Surabaya', period: '2017 - 2020' },
  { type: 'EDUCATION', title: 'Politeknik Negeri Malang', place: 'D-IV Teknik Informatika | Skripsi : Sistem Pendukung Keputusan Penilaian Kinerja Karyawan Untuk Menentukan Karyawan Terbaik Oleh Karyawan PT Jagad Karya Utama dengan Menggunakan Metode Fuzzy - TOPSIS', period: '2020 - 2024' },
  { type: 'INTERNSHIP', title: 'Internship - Malang', place: 'Web Developer', period: '2023' },
  { type: 'WORK EXPERIENCE', title: 'Work Experience - Bandung', place: 'Web Developer | Digital Marketing | UI/UX | IT Support', period: '2025 - 2026' },
  { type: 'WORK EXPERIENCE', title: 'Asisten Dosen - Bandung', place: 'Pemrograman | Basis Data', period: '2025 - 2026' },
  { type: 'WORK EXPERIENCE', title: 'Work experience - Surabaya', place: 'Digital Marketing | Copywriting', period: '2026 - Now' },
  {
    type: 'ACHIEVEMENT',
    title: 'Competitions & Awards',
    place: '',
    period: '',
    achievements: [
      '1st Calistung tingkat kota · 2011',
      '1st Catur putri tingkat nasional · 2011',
      '1st Olimpiade IPA · 2012',
      '1st Olimpiade Matematika · 2013',
      '1st Olimpiade Lembaga SSC · 2013',
      '2nd Olimpiade Kimia · 2018',
      '1st Olimpiade Matematika · 2019',
      '1st Tulis Sastra · 2019',
      '2nd Sastra Indonesia · 2021',
      '1st Karya Tulis · 2023',
      '3rd Sastra · 2023',
    ],
  },
];
const publishedBooks = books;
const image = (id, w = 900) => (id.startsWith('/') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`);
const currentYear = new Date().getFullYear();
function App() {
  const [path, setPath] = useState(location.pathname);
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(-1);
  const go = (url) => {
    history.pushState({}, '', url);
    setPath(url);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handlePopState = () => setPath(location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  useEffect(() => {
    const pageSections = document.querySelectorAll('main > *');
    pageSections.forEach((section) => section.classList.add('scroll-reveal'));
    const sections = document.querySelectorAll('main .scroll-reveal');
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -35px 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [path]);
  useEffect(() => {
    if (lightbox < 0) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(-1);
      if (event.key === 'ArrowRight') setLightbox((index) => (index + 1) % photos.length);
      if (event.key === 'ArrowLeft') setLightbox((index) => (index + photos.length - 1) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);
  const link = (url, label, cls = '') => (
    <a
      key={url}
      href={url}
      className={cls}
      onClick={(e) => {
        e.preventDefault();
        go(url);
      }}
    >
      {label}
    </a>
  );
  const heading = (eyebrow, title, desc) => (
    <header className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <p>{desc}</p>
    </header>
  );
  const gallery = (items = photos) => (
    <div className="photo-grid">
      {items.map((p) => (
        <button
          className="photo-card"
          key={p.title}
          onClick={() => setLightbox(photos.indexOf(p))}
          aria-label={`Open photo: ${p.title}`}
        >
          <div className="gallery-photo-frame">
            <img
              src={image(p.image, 700)}
              alt={p.title}
              loading="lazy"
              onLoad={(event) => {
                event.currentTarget.nextElementSibling.style.display = 'none';
              }}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
            <span className="gallery-photo-fallback">ADD PHOTO: {p.image.split('/').pop()}</span>
          </div>
        </button>
      ))}
    </div>
  );
  const pages = {
    '/': (
      <>
        <section className="hero scroll-reveal">
          <div className="hero-copy">
            <span className="eyebrow">ABOUT ME</span>
            <h1>
              Welcome to
              <br />
              <i>my little world.</i>
            </h1>
            <p>a personal journal about the things i love, the places i visit, my favorite people, and the little moments i want to remember.</p>
            <div className="actions">
              {link('/about', 'A little about me', 'button primary')}
              {link('/journey', 'My journey', 'button text-link')}
            </div>
            <span className="hand-note">made with love</span>
          </div>
          <div className="hero-photo">
            <img
              src={image('/images/profill.jpeg')}
              alt="Nesa profile photo"
            />
            <span className="photo-caption">a little piece of my day</span>
          </div>
          <span className="hero-stamp">
            JOURNAL NO. 01
            <br />
            MY STORY
          </span>
        </section>
        <section
          className="scrap-intro scroll-reveal"
          id="about-me-card"
        >
          <div className="scrap-title">
            <span>A LITTLE ABOUT ME</span>
            <b>✧ ♡ ✧</b>
          </div>
          <div className="scrap-board">
            <div className="scrap-note">
              <span className="scrap-note-label">A LITTLE NOTE · 01</span>
              <h2>Nesa Itfirul Lail</h2>
              <div className="scrap-lines">
                <p>
                  <b>WHAT I DO</b>
                  <span>web development &amp; digital marketing</span>
                </p>
                <p>
                  <b>ALSO LOVE</b>
                  <span>copywriting &amp; writing</span>
                </p>
                <p>
                  <b>MY LITTLE WORLD</b>
                  <span>favorite people &amp; everyday memories</span>
                </p>
                <p>
                  <b>THIS JOURNAL</b>
                  <span>a home for stories, ideas &amp; little things</span>
                </p>
              </div>
              {link('/about', 'more about me →', 'scrap-link')}
              <span className="scrap-doodle doodle-flower">✿</span>
            </div>
            <div className="scrap-polaroid">
              <span className="scrap-tape"></span>
              <img
                src="/images/profill.jpeg"
                alt="Nesa Itfirul Lail"
              />
              <span className="polaroid-caption">a little piece of me ♡</span>
            </div>
            <span className="scrap-sticker sticker-sparkle">✦</span>
            <span className="scrap-sticker sticker-heart">♡</span>
            <span className="scrap-tag">MADE WITH HEART</span>
            <span className="scrap-pencil">✎</span>
          </div>
        </section>
        <section
          className="home-preview section scroll-reveal"
          id="about-preview"
        >
          <div className="home-preview-copy">
            <span className="eyebrow">01 · A LITTLE ABOUT ME</span>
            <h2>
              A little about <i>me.</i>
            </h2>
            <p>{aboutSummary}</p>
            {link('/about', 'Get to know me →', 'inline-link')}
          </div>
          <div className="preview-note">
            “A little space to
            <br />
            be <i>myself.</i>”
          </div>
        </section>
        <section
          className="home-preview section scroll-reveal"
          id="favorites-preview"
        >
          <div className="section-top">
            <div>
              <span className="eyebrow">02 · LITTLE THINGS</span>
              <h2>
                Things I <i>love.</i>
              </h2>
            </div>
            {link('/favorites', 'See all favorites →', 'inline-link')}
          </div>
          <div className="preview-favorites-grid">
            {favorites.map((favorite, i) => (
              <article
                className="preview-favorite-card"
                key={favorite.title}
              >
                <div className="preview-favorite-image">
                  <img
                    src={favorite.image}
                    alt={favorite.title}
                    loading="lazy"
                    onLoad={(event) => {
                      event.currentTarget.nextElementSibling.style.display = 'none';
                    }}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>ADD PHOTO</span>
                </div>
                <div className="preview-favorite-copy">
                  <small>
                    0{i + 1} · {favorite.category}
                  </small>
                  <h3>{favorite.title}</h3>
                </div>
              </article>
            ))}
          </div>
          {link('/favorites', 'Explore my favorites →', 'inline-link')}
        </section>
        <section
          className="home-preview section scroll-reveal"
          id="hobbies-preview"
        >
          <div className="section-top">
            <div>
              <span className="eyebrow">03 · HOBBIES & ACTIVITIES</span>
              <h2>
                Things I love <i>to do.</i>
              </h2>
            </div>
            {link('/hobbies', 'My hobbies →', 'inline-link')}
          </div>
          <div className="preview-hobbies">
            {hobbies.map((hobby, i) => (
              <article key={hobby.title}>
                <div className="preview-hobby-image">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    loading="lazy"
                    onLoad={(event) => {
                      event.currentTarget.nextElementSibling.style.display = 'none';
                    }}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>ADD PHOTO: {hobby.image.split('/').pop()}</span>
                </div>
                <span>0{i + 1}</span>
                <h3>{hobby.title}</h3>
              </article>
            ))}
          </div>
        </section>
        <section
          className="home-preview section scroll-reveal"
          id="journey-preview"
        >
          <div className="section-top">
            <div>
              <span className="eyebrow">04 · ONE STEP AT A TIME</span>
              <h2>
                My journey <i>through life.</i>
              </h2>
            </div>
            {link('/journey', 'Read my full journey →', 'inline-link')}
          </div>
          <div className="journey-strip">
            {journeyItems
              .filter((item) => item.type === 'EDUCATION')
              .map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
          </div>
        </section>
        <section
          className="home-preview section scroll-reveal"
          id="works-preview"
        >
          <div className="section-top">
            <div>
              <span className="eyebrow">05 · MY BOOKSHELF</span>
              <h2>
                My published <i>books.</i>
              </h2>
            </div>
            {link('/works', 'See my published books →', 'inline-link')}
          </div>
          <div className="book-mini-grid">
            {publishedBooks.map((book) => (
              <article
                className="book-mini"
                key={book.cover}
              >
                <div className="book-mini-cover">
                  <img
                    src={image(book.cover, 400)}
                    alt={`Cover ${book.title}`}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>{book.title}</span>
                </div>
                <h3>{book.title}</h3>
                {book.year && <small>{book.year}</small>}
                <p>{book.note.replaceAll('*', '')}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="home-contact-preview scroll-reveal"
          id="contact-preview"
        >
          <span className="eyebrow">07 · HAVE A NOTE FOR ME?</span>
          <h2>
            Say <i>hello.</i>
          </h2>
          <p>It would be lovely to hear from you.</p>
          {link('/contact', 'Get in touch →', 'button primary')}
        </section>
      </>
    ),
    '/about': (
      <>
        {heading('A LITTLE INTRODUCTION', 'Hello, I am Nesa')}
        <section className="about-layout">
          <div className="about-image">
            <img
              src={image('/images/profil.jpeg')}
              alt="Nesa profile photo"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
            <span>Nesa Itfirul Lail</span>
          </div>
          <div className="about-copy">
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <h2>
              An outline of
              <br />
              <i>the story of my life</i>
            </h2>
            <article className="about-paper paper-intro">
              <span className="paper-label">01 / A LITTLE PIECE OF ME</span>
              <h3>Hi, I am Nesa</h3>
              <p>{aboutSummary}</p>
              <p>
                Aku menyukai hal-hal sederhana yang membuatku merasa hidup. Sushi, Matcha, dan Cokelat untuk menemani hari-hari biasa. Lampu kota yang tetap menyala di tengah ramainya dunia. Pantai dengan suara ombaknya. Juga alam yang
                memberiku ruang untuk diam tanpa harus menjelaskan apa pun kepada siapa pun.
              </p>
              <p>
                Aku juga menyukai sunrise yang perlahan muncul di balik cakrawala dan sunset yang mewarnai langit sebelum hari berakhir. Ada sesuatu dari keduanya yang selalu membuatku ingin berhenti sejenak dan menikmati waktu. Aku
                menyukai hujan dengan suara rintiknya yang menenangkan. Terkadang, aku hanya ingin duduk diam sambil menikmati suasana dan membiarkan pikiranku berjalan ke mana saja.
              </p>
              <p>
                Sebagai seseorang yang cenderung menikmati kesendirian, aku sering menemukan banyak hal dalam diam. Ada pikiran yang tidak selalu bisa kuceritakan. Ada perasaan yang lebih mudah kutulis daripada kuucapkan. Dan ada bagian
                dari diriku yang mungkin hanya bisa dipahami oleh orang-orang yang benar-benar mengenalku.
              </p>
            </article>
          </div>
        </section>
        <section
          className="about-story-grid"
          aria-label="More about me"
        >
          <article className="about-paper paper-work">
            <span className="paper-label">02 / A PART OF MY STORY</span>
            <h3>A Part of My Story</h3>
            <p>
              Tahun 2022 menjadi salah satu bagian hidup yang mengubahku. Aku kehilangan sahabat yang selama ini menjadi tempat paling aman untuk bercerita. Seseorang yang bisa mendengarkan banyak hal tentang diriku tanpa membuatku merasa
              harus menjadi orang lain. Kepergiannya meninggalkan ruang kosong yang tidak mudah dijelaskan. Aku bukan hanya kehilangan seseorang yang kusayangi, tetapi juga kehilangan tempat untuk meletakkan banyak hal yang selama ini
              kusimpan sendiri.
            </p>
            <p>
              Sejak saat itu, aku belajar menjalani hidup dengan cara yang berbeda. Ada hari-hari ketika aku harus mengumpulkan diriku sendiri untuk kembali melangkah. Ada saat ketika aku merindukan masa-masa sebelum semuanya berubah.
              Namun, di antara semua hal yang tidak lagi sama, aku berusaha menemukan alasan untuk tetap melanjutkan hidup.
            </p>
          </article>
          <article className="about-paper paper-writing">
            <span className="paper-label">03 / THINGS THAT KEEP ME GOING</span>
            <h3>Things That Keep Me Going</h3>
            <p>Mungkin salah satu alasan itu terdengar sederhana. Aku selalu percaya bahwa akan ada hari esok. Dan entah bagaimana, keyakinan kecil itu membuatku bertahan sampai hari ini.</p>
            <p>
              Aku percaya bahwa besok mungkin akan ada hal menyenangkan yang belum pernah kutemui. Mungkin secangkir matcha yang terasa lebih nikmat dari biasanya. Langit sore yang indah. Perjalanan ke tempat yang selama ini hanya ada dalam
              daftar keinginanku. Pertemuan dengan seseorang yang membuatku tertawa tanpa alasan. Atau sebuah hari biasa yang ternyata mampu membuatku merasa bahwa hidup masih layak dinikmati.
            </p>
            <p>
              Mungkin juga tentang bakso yang sering aku beli, takoyaki, tahu bakar, tahu tek, atau nasi goreng langganan kesukaanku yang rasanya selalu punya tempat tersendiri. Tentang sushi yang kusukai dan pentol yang sesekali ingin
              kunikmati. Tentang kafe aesthetic dengan sudut-sudut cantik yang membuatku ingin mengabadikan momen. Tentang perjalanan ke tempat baru yang belum pernah kukunjungi, atau sekadar menikmati sunrise dan sunset di tempat yang
              berbeda.
            </p>
            <p>
              Barangkali, kebahagiaan juga bisa datang dari hal-hal yang sesederhana itu. Dari makanan favorit yang bisa kunikmati setelah hari yang melelahkan. Dari hujan yang turun ketika aku sedang ingin menenangkan pikiran. Atau dari
              pemandangan langit yang membuatku lupa sejenak pada hal-hal yang sedang memenuhi kepala.
            </p>
            <p>
              Mungkin juga ada percakapan sederhana dengan teman-temanku. Tawa yang datang tanpa alasan. Cerita-cerita kecil yang membuat hari terasa lebih ringan. Atau pesan dari seseorang yang membutuhkan bantuanku. Sebab, siapa tahu,
              masih ada teman-temanku yang membutuhkan kehadiranku, pendengaranku, atau sekadar bantuanku untuk melewati sesuatu yang sedang mereka hadapi. Dan mungkin, tanpa kusadari, keberadaanku yang sederhana bisa membuat hari seseorang
              terasa sedikit lebih ringan.
            </p>
            <p>
              Aku tidak selalu tahu kapan hal-hal baik itu akan datang. Aku juga tidak bisa menjanjikan bahwa hari-hari ke depan akan selalu mudah. Namun, aku ingin tetap memberi diriku kesempatan untuk menemukannya. Sebab, bagaimana aku
              bisa tahu bahwa sesuatu yang indah sedang menungguku jika aku tidak pernah sampai pada hari ketika hal itu terjadi?
            </p>
            <p>
              Jadi, aku terus mencoba. Bukan karena aku selalu kuat, bukan pula karena aku sudah sepenuhnya berdamai dengan segala hal yang pernah terjadi. Aku hanya ingin melihat apa yang masih disiapkan kehidupan untukku. Aku ingin
              mengunjungi tempat-tempat baru, menciptakan kenangan baru, mengenal diriku lebih jauh, dan menemukan kebahagiaan dalam hal-hal yang mungkin selama ini luput dari perhatian.
            </p>
          </article>
          <article className="about-paper paper-life">
            <span className="paper-label">04 / A NOTE TO MY FUTURE SELF</span>
            <h3>A Note to My Future Self</h3>
            <p>Aku tahu ada hal-hal yang akan selalu kurindukan. Ada bagian dari diriku yang berubah setelah kehilangan. Namun, aku juga ingin percaya bahwa hidup masih memiliki banyak cerita yang belum sempat kutuliskan.</p>
            <p>Aku tidak sedang berusaha menjadi diriku yang dulu. Aku sedang belajar menjadi seseorang yang baru, tanpa harus melupakan semua hal yang pernah membentukku.</p>
            <p>
              Dan jika suatu hari nanti aku melihat kembali perjalanan ini, aku berharap bisa tersenyum karena ternyata aku berhasil sampai sejauh ini. Bukan karena semuanya berjalan sesuai keinginan, tetapi karena aku tetap memberi diriku
              kesempatan untuk mengalami hal-hal baik yang dulu hanya bisa kubayangkan.
            </p>
            <p>Untuk saat ini, aku hanya ingin terus berjalan. Sebab, siapa tahu, besok adalah salah satu hari yang kelak akan kusyukuri karena pernah kujalani.</p>
            <p>This is a little piece of me. Not the whole story, but an honest part of it. ♡</p>
          </article>
        </section>
      </>
    ),
    '/favorites': (
      <>
        {heading('THINGS I LOVE', 'My little list of <i>favorites.</i>')}
        <div className="favorite-grid">
          {favorites.map((favorite, i) => (
            <article
              className="favorite"
              key={favorite.title}
            >
              <div className="fav-art">
                <img
                  src={favorite.image}
                  alt={favorite.title}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <span className="photo-coming-soon">PHOTO COMING SOON</span>
                <span className="favorite-number">FAVORITE NO. 0{i + 1}</span>
              </div>
              <small>{favorite.category}</small>
              <h3>{favorite.title}</h3>
              <p>{favorite.note}</p>
            </article>
          ))}
        </div>
        <section className="film-favorites">
          <div className="film-favorites-heading">
            <span className="eyebrow">LITTLE STORIES I LOVE</span>
            <h2>My favorite <i>films.</i></h2>
            <p>A few stories that feel like keeping a little piece of the cinema with me.</p>
          </div>
          <div className="film-grid">
            {filmFavorites.map((film) => (
              <article className="film-card" key={film.title}>
                <img className="film-photo" src={film.image} alt={film.title} loading="lazy" />
                <h3>{film.title}</h3>
              </article>
            ))}
          </div>
        </section>
      </>
    ),
    '/hobbies': (
      <>
        {heading('HOBBIES & ACTIVITIES', 'Things I love <i>to do.</i>')}
        <div className="hobby-list">
          {hobbies.map((hobby, i) => (
            <article
              className="hobby"
              key={hobby.title}
            >
              <div className="hobby-photo-slot">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  loading="lazy"
                  onLoad={(event) => {
                    event.currentTarget.nextElementSibling.style.display = 'none';
                  }}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <span>ADD PHOTO: {hobby.image.split('/').pop()}</span>
              </div>
              <div>
                <span className="eyebrow">THINGS I LOVE - 0{i + 1}</span>
                <h2>{hobby.title}</h2>
                {hobby.note && <p>{hobby.note}</p>}
                <span className="tag">LITTLE JOYS</span>
              </div>
            </article>
          ))}
        </div>
      </>
    ),
    '/journey': (
      <>
        {heading('ONE STEP AT A TIME', 'A life in <i>little chapters.</i>')}
        <div className="timeline">
          {journeyItems.map((item, i) => (
            <article
              className="timeline-item"
              key={item.title}
            >
              <span className="timeline-dot">{String(i + 1).padStart(2, '0')}</span>
              <div>
                {item.period && item.period !== '-' && <small>{item.period}</small>}
                <h2>{item.title}</h2>
                {item.achievements ? (
                  <ul className="timeline-achievements">
                    {item.achievements
                      .filter((achievement) => achievement.trim() && !/^\[.*\]$/.test(achievement))
                      .map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                  </ul>
                ) : (
                  <>
                    {item.place && (
                      <p>
                        <b>{item.place}</b>
                      </p>
                    )}
                    {item.detail && <p>{item.detail}</p>}
                  </>
                )}
              </div>
              <span className="timeline-note">{item.type}</span>
            </article>
          ))}
        </div>
      </>
    ),
    '/works': (
      <>
        {heading('MY BOOKSHELF', 'My published <i>books.</i>', 'A collection of books I have published and the stories behind them.')}
        <section className="works-section">
          <div className="works-heading">
            <span className="eyebrow">MY PUBLISHED BOOKS</span>
            <h2>
              Stories in print <i>♡</i>
            </h2>
            <p>Each book is a little world I am happy to share.</p>
          </div>
          <div className="book-grid">
            {publishedBooks.map((book) => (
              <article
                className="book-card"
                key={book.title}
              >
                <div className="book-cover">
                  <img
                    src={image(book.cover, 600)}
                    alt={`Cover ${book.title}`}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="cover-fallback">
                    BOOK COVER
                    <br />
                    <b>BOOK COVER</b>
                  </span>
                </div>
                <div className="book-info">
                  <span className="eyebrow">
                    {book.kind}{book.year && ` · ${book.year}`}
                  </span>
                  <h3>{book.title}</h3>
                  <div className="book-description">{renderBookDescription(book.note)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    ),
    '/gallery': (
      <>
        {heading('THE KEEPSAKE BOX', 'Collected <i>moments.</i>', 'A little gallery of days I want to remember.')}
        <div className="filters">
          {['All', 'Surabaya', 'Malang', 'Bandung', 'MDPL'].map((f) => (
            <button
              className={filter === f ? 'selected' : ''}
              onClick={() => setFilter(f)}
              key={f}
            >
              {f}
            </button>
          ))}
        </div>
        {gallery(filter === 'All' ? photos : photos.filter((p) => p.type === filter))}
      </>
    ),
    '/contact': (
      <>
        {heading('SAY HELLO', 'Let us share <i>a note.</i>', 'Have a note, a song recommendation, or just want to say hello?')}
        <section className="contact-card">
          <span className="contact-flower">✿</span>
          <h2>
            You can find me
            <br />
            <i>on these platforms.</i>
          </h2>
          <div className="socials">
            <a
              href="https://www.tiktok.com/@cee.snsn"
              target="_blank"
              rel="noreferrer"
            >
              TikTok ↗
            </a>
            <a
              href="https://instagram.com/nesaail_"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://github.com/senctk"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </>
    ),
  };
  return (
    <>
      <div className="topline">
        <span>ABOUT ME</span>
        <span>MADE WITH LOVE ♡</span>
      </div>
      <nav className="nav">
        <a
          href="/"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go('/');
          }}
        >
          <span className="brand-mark">
            <img
              src="/images/profill.jpeg"
              alt=""
            />
          </span>
          <span>
            Nesa Itfirul Lail<small>Web Developer | Digital Marketing | Copywriting | Writer</small>
          </span>
        </a>
        <div className="nav-links">{nav.map(([u, n]) => link(u, n, `nav-link ${path === u ? 'active' : ''}`))}</div>
      </nav>
      <main key={path}>{pages[path] || pages['/']}</main>
      <footer>
        <div>
          <a
            className="brand"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              go('/');
            }}
          >
            <span className="brand-mark">
              <img
                src="/images/profill.jpeg"
                alt=""
              />
            </span>
            <span>
              Nesa Itfirul Lail<small>Web Developer | Digital Marketing | Copywriting | Writer</small>
            </span>
          </a>
          <p>A little piece of me, saved here.</p>
        </div>
        <div className="footer-nav">{nav.slice(1).map(([u, n]) => link(u, n))}</div>
        <small>© {currentYear} · NESA ITFIRUL LAIL</small>
      </footer>
      {lightbox >= 0 && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            className="close"
            onClick={() => setLightbox(-1)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="prev"
            onClick={() => setLightbox((lightbox + photos.length - 1) % photos.length)}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <img
            src={image(photos[lightbox % photos.length].image, 1400)}
            alt={photos[lightbox % photos.length].title}
          />
          <button
            className="next"
            onClick={() => setLightbox((lightbox + 1) % photos.length)}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
export default App;
