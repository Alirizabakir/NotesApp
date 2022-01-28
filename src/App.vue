<template>
  <div id="nav" class="nav">
    <header class="settingsBox">
      <button class="settingsBtn menuBtnBorder">&Colon;</button>
      <button @click="adActive()" class="settingsBtn menuBtnBorder">
        &plus;
      </button>
      <button class="settingsBtn menuBtnBorder" @click="upActive()">&olarr;</button>
      <button class="settingsBtn menuBtnBorder" @click="delNote()">&times;</button>
    </header>
    <main class="notesBox">
      <div class="box" :class="first">
        <header class="boxHeader red">
          <h2 class="header">{{ notesData[0].name }}</h2>
        </header>
        <main class="boxMain">
          <p class="main">
            {{ notesData[0].variable }}
          </p>
        </main>
        <footer class="boxFooter red">
          <button
            class="footerBtn red redBorder"
            @click="prevNote(notesData[0])"
          >
            &lt;
          </button>
          <button
            class="footerBtn red redBorder"
            @click="nextNote(notesData[0])"
          >
            &gt;
          </button>
        </footer>
      </div>
      <div class="box" :class="second">
        <header class="boxHeader yellow">
          <h2 class="header">{{ notesData[0].name }}</h2>
        </header>
        <main class="boxMain">
          <p class="main">
            {{ notesData[0].variable }}
          </p>
        </main>
        <footer class="boxFooter yellow">
          <button
            class="footerBtn yellowBorder"
            @click="prevNote(notesData[0])"
          >
            &lt;
          </button>
          <button
            class="footerBtn yellowBorder"
            @click="nextNote(notesData[0])"
          >
            &gt;
          </button>
        </footer>
      </div>
      <div class="box" :class="third">
        <header class="boxHeader green">
          <h2 class="header">{{ notesData[0].name }}</h2>
        </header>
        <main class="boxMain">
          <p class="main">
            {{ notesData[0].variable }}
          </p>
        </main>
        <footer class="boxFooter green">
          <button class="footerBtn greenBorder" @click="prevNote(notesData[0])">
            &lt;
          </button>
          <button class="footerBtn greenBorder" @click="nextNote(notesData[0])">
            &gt;
          </button>
        </footer>
      </div>
      <div class="box" :class="fourth">
        <header class="boxHeader blue">
          <h2 class="header">{{ notesData[0].name }}</h2>
        </header>
        <main class="boxMain">
          <p class="main">
            {{ notesData[0].variable }}
          </p>
        </main>
        <footer class="boxFooter blue">
          <button class="footerBtn blueBorder" @click="prevNote(notesData[0])">
            &lt;
          </button>
          <button class="footerBtn blueBorder" @click="nextNote(notesData[0])">
            &gt;
          </button>
        </footer>
      </div>
      <div class="box" :class="fifth">
        <header class="boxHeader purple">
          <h2 class="header">{{ notesData[0].name }}</h2>
        </header>
        <main class="boxMain">
          <p class="main">
            {{ notesData[0].variable }}
          </p>
        </main>
        <footer class="boxFooter purple">
          <button
            class="footerBtn purpleBorder"
            @click="prevNote(notesData[0])"
          >
            &lt;
          </button>
          <button
            class="footerBtn purpleBorder"
            @click="nextNote(notesData[0])"
          >
            &gt;
          </button>
        </footer>
      </div>
    </main>
    <footer :class="addActive">
      <div class="footerName">
        <label for="noteName" class="nameLabel">Name</label>
        <input
          id="noteName"
          class="nameInput"
          v-model="newNote.name"
          type="text"
          placeholder="Name .."
        />
        <span v-if="addSpan" class="text-xs text-red-400 ml-1 mt-1"
          >- Cannot be empty -</span
        >
      </div>
      <div class="footerVar">
        <label for="noteVar" class="varLabel">Note</label>
        <textarea
          name="note"
          id="noteVar"
          v-model="newNote.variable"
          class="varArea"
          placeholder="Something write .."
        ></textarea>
      </div>
      <button @click="addNote()" class="addNoteBtn">Save</button>
    </footer>
    <footer :class="updateActive">
      <div class="footerName">
        <label for="noteName" class="nameLabel">Name</label>
        <input
          id="noteName"
          class="nameInput"
          v-model="notesData[0].name"
          type="text"
          placeholder="Name .."
        />
        <span v-if="updateSpan" class="text-xs text-red-400 ml-1 mt-1"
          >- Cannot be empty -</span
        >
      </div>
      <div class="footerVar">
        <label for="noteVar" class="varLabel">Note</label>
        <textarea
          name="note"
          id="noteVar"
          v-model="notesData[0].variable"
          class="varArea"
          placeholder="Something write .."
        ></textarea>
      </div>
      <button @click="updateNote()" class="addNoteBtn">Save</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      addSpan: false,
      updateSpan: false,
      addActive: "footerBox",
      updateActive: "footerBox",
      newNote: {
        name: null,
        variable: null,
      },
      first: "first",
      second: "second",
      third: "third",
      fourth: "fourth",
      fifth: "fifth",
      notesData: [
        {
          name: "Spor Antremanı",
          variable: "Kardeşim kasların ne bilsin hafta sonu olduğunu .. Hadi baaaas !!",
        },
        {
          name: "Makarna Tarifi",
          variable: "Su - Tuz - Saçla - Soğan - Makarna",
        },
        {
          name: "League Of Legends Favori Şampiyonlar",
          variable: "Akali - Ashe - Lucian - Gnar - Lux - Varus - Olaf",
        },
      ],
    };
  },
  methods: {
    
    delNote(){
      if(this.notesData.length > 1){
        this.notesData.shift()
        console.log(this.notesData)
      }
    },
    
    upActive() {
      if (this.updateActive == "footerBox") {
        this.updateActive = "footerActive";
      } else {
        this.updateActive = "footerBox";
      }
    },
    updateNote(){
      const changeNote = {
        name: this.notesData[0].name,
        variable: this.notesData[0].variable 
      }
      this.notesData.shift()
      this.notesData.unshift(changeNote);
      this.updateActive = 'footerBox'
    },
    addNote() {
      if (this.newNote.name && this.newNote.variable != null) {
        const newNotee = {
          name: this.newNote.name,
          variable: this.newNote.variable,
        };
        this.notesData.unshift(newNotee);
        this.isActiveClass = "footerBox";
        this.spanActive = !this.spanActive;
        this.newNote.name = null;
        this.newNote.variable = null;
      } else {
        this.spanActive = true;
      }
    },
    adActive() {
      if (this.addActive == "footerBox") {
        this.addActive = "footerActive";
      } else {
        this.addActive = "footerBox";
      }
    },
    nextNote(note) {
      if (this.first == "first") {
        this.first = "fifth";
        this.second = "first";
        this.third = "second";
        this.fourth = "third";
        this.fifth = "fourth";
      } else if (this.second == "first") {
        this.first = "fourth";
        this.second = "fifth";
        this.third = "first";
        this.fourth = "second";
        this.fifth = "third";
      } else if (this.third == "first") {
        this.first = "third";
        this.second = "fourth";
        this.third = "fifth";
        this.fourth = "first";
        this.fifth = "second";
      } else if (this.fourth == "first") {
        this.first = "second";
        this.second = "third";
        this.third = "fourth";
        this.fourth = "fifth";
        this.fifth = "first";
      } else if (this.fifth == "first") {
        this.first = "first";
        this.second = "second";
        this.third = "third";
        this.fourth = "fourth";
        this.fifth = "fifth";
      }
      setTimeout(() => {
        this.notesData.shift();
        this.notesData.push(note);
      }, 300);
    },
    prevNote() {
      if (this.first == "first") {
        this.first = "second";
        this.second = "third";
        this.third = "fourth";
        this.fourth = "fifth";
        this.fifth = "first";
      } else if (this.fifth == "first") {
        this.first = "third";
        this.second = "fourth";
        this.third = "fifth";
        this.fourth = "first";
        this.fifth = "second";
      } else if (this.fourth == "first") {
        this.first = "fourth";
        this.second = "fifth";
        this.third = "first";
        this.fourth = "second";
        this.fifth = "third";
      } else if (this.third == "first") {
        this.first = "fifth";
        this.second = "first";
        this.third = "second";
        this.fourth = "third";
        this.fifth = "fourth";
      } else if (this.second == "first") {
        this.first = "first";
        this.second = "second";
        this.third = "third";
        this.fourth = "fourth";
        this.fifth = "fifth";
      }
      setTimeout(() => {
        const lastItem = this.notesData.pop();
        this.notesData.unshift(lastItem);
      }, 300);
    },
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;

  background-color: #264c61;

  display: flex;
  align-items: center;
  justify-content: center;
}

#nav {
  .settingsBtn,
  .footerBtn {
    transition: all 0.3s;
    &:hover {
      text-shadow: 
        0px 0px 5px rgba(225, 225, 225, .5),
        0px 0px 13px rgba(225, 225, 225, .6), 
        0px 0px 14px rgba(225, 225, 225, .7),
        0px 0px 15px rgba(225, 225, 225, 1);
      color: #ffffff;
    }
  }
  .first,
  .second,
  .third,
  .fourth,
  .fifth {
    transition: all 0.7s ease-in-out;
  }
  .first {
    opacity: 1;
  }
  .second {
    opacity: 0.8;
  }
  .third {
    opacity: 0.6;
  }
  .fourth {
    opacity: 0.4;
  }
  .fifth {
    opacity: 0.2;
  }

  .boxMain {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
  textarea {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  .footerBox,
  .footerActive {
    transition: all 0.6s;
  }
  .footerBox {
    opacity: 0;
  }
  .footerActive {
    opacity: 1;
  }
}
</style>
