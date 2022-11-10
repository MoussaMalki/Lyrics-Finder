import React from "react";
import Input from "./Input";

const List = () => {
  const apiURL = `https://api.lyrics.ovh`;

  const onClick = () => {
    document.querySelector(`.list`).innerHTML = " ";

    let searchValue = document.querySelector(`#search`).value;

    if (!searchValue) {
      alert(`please enter a name`);
    } else {
      searchSong(searchValue);
    }
  };

  async function searchSong(searchValue) {
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
    const data = await searchResult.json();
    showData(data);
  }

  function showData(data) {
    data.data.slice(0, 5).map((song) => {
      let div = document.createElement(`div`);

      let divPic = document.createElement(`img`);
      divPic.setAttribute(`src`, `${song.album.cover}`);
      let divTitleBtn = document.createElement(`div`);
      let divTitle = document.createTextNode(
        `${song.title} - ${song.artist.name}`
      );
      let divBtn = document.createElement(`span`);
      divBtn.innerHTML = ` <span data-artist="${song.artist.name}" data-songTitle="${song.title_short}"> Get Lyrics</span>`;
      divBtn.className = `viewLyrics`;
      divBtn.style.cssText = `padding: 5px 20px; border-radius: 5px; background-color:#393E46;
      color: #fff; font-weight: 700; cursor: pointer`;

      divTitleBtn.appendChild(divTitle);
      divTitleBtn.appendChild(divBtn);
      div.appendChild(divPic);
      div.appendChild(divTitleBtn);
      document.querySelector(`.list`).appendChild(div);
    });

    let btn = document.querySelectorAll(`.viewLyrics`);

    btn.forEach((e) => {
      e.addEventListener(`click`, () => {
        const artist = e.children[0].getAttribute(`data-artist`);
        const songTitle = e.children[0].getAttribute(`data-songTitle`);

        let lyrics = `https://genius.com/${artist.replace(
          " ",
          "-"
        )}-${songTitle.replace(" ", "-")}-lyrics`;

        document.location.href = `${lyrics
          .replaceAll(" ", "-")
          .replaceAll(/[&#,()$%'"*?<>{}]/g, "")}`;
      });
    });
  }
  return (
    <>
      <div style={inputContainer}>
        <div style={input}>
          <Input text="Search Song" />
          <i class="bx bx-search-alt" style={addBtn} onClick={onClick}></i>
        </div>
      </div>
      <div className="list"></div>
    </>
  );
};

export default List;

const inputContainer = {
  display: "flex",
  justifyContent: "center",
};
const addBtn = {
  fontSize: "1.5rem",
  position: "absolute",
  top: "0.8rem",
  right: "1.1rem",
  color: "var(--main-color)",
  cursor: "pointer",
};
const input = {
  position: "relative",
  width: "21.8rem",
};
