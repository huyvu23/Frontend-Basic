const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Click Pow Get Down",
      singer: "Raftaar x Fortnite",
      path: "https://mp3.vlcmusic.com/download.php?track_id=34737&format=320",
      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg",
    },
    {
      name: "Tu Phir Se Aana",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
    },
    {
      name: "Naachne Ka Shaunq",
      singer: "Raftaar x Brobha V",
      path: "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
      image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
    },
    {
      name: "Mantoiyat",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
      image: "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
    },
    {
      name: "Aage Chal",
      singer: "Raftaar",
      path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
      image: "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg",
    },
    {
      name: "Feeling You",
      singer: "Raftaar x Harjas",
      path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
      image: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return ` 
      <div class="song">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `;
    });
    $(".playlist").innerHTML = htmls.join("\n");
  },
  defineProperties: function () {
    // cú pháp :Object.defineProperty(obj,descriptor,prop)
    //Phương thức này cho phép chúng ta khai báo thuộc tính mới,
    // hoặc thay đổi một thuộc tính đã có của một object
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.song[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const cd = $(".cd");
    // Lấy ra chiều rộng mặc định của cd
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      // lấy ra điêm mà người dùng vuốt
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newWith = cdWidth - scrollTop;
      cd.style.width = newWith > 0 ? newWith + "px" : 0;
      cd.style.opacity = newWith / cdWidth;
    };
  },
  loadCurrentSong: function () {
    const heading = $("header h2");
    const cdThumb = $(".cd-thumb");
    const audio = $("#audio");
    heading.textContent = this.currentSong.name;
  },
  start: function () {
    // Định nghĩa các thuộc tính cho Object
    this.defineProperties();

    // Lắng nghe xử lí các sự kiện (DOM events)
    this.handleEvents();

    // Tải bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    // Render ra playlist
    this.render();
  },
};

app.start();
