import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import random from "lodash/random";
import range from "lodash/range";
import clamp from "lodash/clamp";

import bg from "./assets/bg.png";
import light from "./assets/light.png";
import knob from "./assets/knob.png";

import text from "./assets/text.js";

const flickerOut = keyframes`
  ${range(0, 101, 5).map(
    x => `${x}% {
    opacity: ${random(true) * (1 - x / 100)};
  }`
  )}
`;

const flickerIn = keyframes`
  ${range(0, 101, 5).map(
    x => `${x}% {
    opacity: ${random(true) * (x / 100)};
  }`
  )}
`;

const GameContainer = styled.div`
  width: 1280px;
  height: 720px;
  background: #0d0705;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${bg});
  pointer-events: none;
`;

const VolumeKnob = styled.img`
  position: absolute;
  left: 280px;
  top: 435px;
  transform-origin: 50% 55%;
`;

const Tube = styled.img`
  position: absolute;
  left: 153px;
  top: 190px;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-direction: normal;
  ${props =>
    props.trans === "out"
      ? css`
          animation-name: ${flickerOut};
        `
      : props.trans === "in"
      ? css`
          animation-name: ${flickerIn};
        `
      : ""}
`;

const Light = styled.img`
  position: absolute;
  left: 51px;
  top: 403px;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-direction: normal;
  ${props =>
    props.trans === "out"
      ? css`
          animation-name: ${flickerOut};
        `
      : props.trans === "in"
      ? css`
          animation-name: ${flickerIn};
        `
      : ""}
`;

const TextDisplay = styled.div`
  position: absolute;
  left: 510px;
  top: 140px;
  width: 560px;
  height: 370px;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  font-size: 42px;
  color: #f5c398;
  text-shadow: 0 0 8px rgb(232, 144, 51, 0.8), 0 0 8px rgb(232, 144, 51, 0.8);
  line-height: 0.8;
  letter-spacing: 0.02em;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-direction: normal;
  ${props =>
    props.trans === "out"
      ? css`
          animation-name: ${flickerOut};
        `
      : props.trans === "in"
      ? css`
          animation-name: ${flickerIn};
        `
      : ""}

  p {
    margin: 0;
    margin-bottom: 20px;
  }

  button {
    color: #f9f7bd;
    text-shadow: 0 0 8px #f1ef90;
    text-decoration: none;
    transition: all 0.3s ease;
    background: none;
    display: inline;
    border: none;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &:focus {
      outline: 0;
    }

    &:hover {
      color: #ffffff;
    }
  }
`;

const credits = [
  "Art and Music by Victor Pflug.",
  "Written by Mark Yohalem.",
  "Programmed and Read by Steven Poulton.",
  "Thanks for playing.",
  "SYSTEM RESETTING"
];

class App extends Component {
  state = {
    current: "start",
    trans: "none",
    volume: 0.5,
    credit: -1
  };

  showCredits = () => {
    const nextCredit = () => {
      this.setState(old => ({
        credit: old.credit + 1,
        trans: "in"
      }));
      setTimeout(() => {
        this.setState({
          trans: "out"
        });
        if (this.state.credit < credits.length - 1) {
          setTimeout(nextCredit, 1000);
        } else {
          this.goto("start");
        }
      }, 2000);
    };

    nextCredit();
  };

  goto = where => {
    this.backgroundMusic.play();
    if (this.state.trans !== "none" && where !== "start") {
      return;
    }
    if (where !== "start") {
      this.click.play();
    }

    this.setState({
      trans: "out"
    });
    setTimeout(() => {
      if (where.toLowerCase() === "<fin>") {
        this.showCredits();
        return;
      }
      this.setState({
        credit: -1,
        current: where
          .replace("<", "")
          .replace(">", "")
          .toLowerCase(),
        trans: "in"
      });
      setTimeout(() => {
        this.setState({
          trans: "none"
        });
      }, 1000);
    }, 1000);
  };

  renderParagraph = p => {
    const split = p.split(/(<\w*>)/g);
    return (
      <p>
        {split.map((x, i) =>
          x.startsWith("<") ? (
            <button key={i} onClick={() => this.goto(x)}>
              {x.replace("<", "").replace(">", "")}
            </button>
          ) : (
            <span key={i}>{x}</span>
          )
        )}
      </p>
    );
  };

  componentDidMount() {
    this.backgroundMusic.volume = 0.5;
  }

  handleVolume = ev => {
    ev.preventDefault();
    const delta = ev.type === "click" ? 0.25 : -0.25;
    let { volume } = this.state;
    volume = clamp(volume + delta, 0, 1);
    this.setState({
      volume
    });
    this.backgroundMusic.volume = volume;
    this.backgroundMusic.play();
  };

  render() {
    const { current, trans, volume, credit } = this.state;

    const paras = text[current].split("\n");

    const volumeStyle = {
      transform: `rotate(${(volume - 0.5) * 180}deg)`
    };

    const creditText = credits[credit];

    return (
      <GameContainer>
        <audio
          src="/audio/music.mp3"
          autoPlay
          ref={e => (this.backgroundMusic = e)}
          loop
        />
        <audio src="/audio/click.mp3" ref={e => (this.click = e)} />
        {creditText == null && <audio src={`/audio/${current}.ogg`} autoPlay />}
        <TextDisplay trans={trans}>
          {creditText || <div>{paras.map(this.renderParagraph)}</div>}
        </TextDisplay>

        <Background />
        <Tube
          trans={trans}
          src={`/tube/${creditText == null ? current : "fin"}.png`}
        />
        <Light trans={trans} src={light} />
        <VolumeKnob
          src={knob}
          style={volumeStyle}
          onClick={this.handleVolume}
          onContextMenu={this.handleVolume}
        />
      </GameContainer>
    );
  }
}

export default App;
