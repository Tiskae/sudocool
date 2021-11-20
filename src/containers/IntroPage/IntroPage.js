import React from "react";
import { connect } from "react-redux";
import * as classes from "./IntroPage.module.css";
import * as sudokuActions from "../../store/actions/sudokuActions";
import * as appUIactions from "../../store/actions/appUIactions";
import { MODE_PLAY, MODE_SOLVE } from "../../helpers/helpers";

import OptionSide from "../../components/OptionSIde/OptionSide";
import RadioGroup from "../../UI/RadioGroup/RadioGroup";

import { EASY_PUZZLE, MEDIUM_PUZZLE, HARD_PUZZLE } from "../../helpers/helpers";

import PropTypes from "prop-types";

const IntroPage = (props) => {
  const styleClasses = [classes.IntroPage];

  if (!props.shouldShowIntroComponent) {
    styleClasses.push(classes.Hidden);
  }

  const setEasyDifficulty = () => {
    props.setDifficulty(EASY_PUZZLE);
  };

  const setMediumDifficulty = () => {
    props.setDifficulty(MEDIUM_PUZZLE);
  };
  const setHardDifficulty = () => {
    props.setDifficulty(HARD_PUZZLE);
  };

  const difficultyBtns = [
    { radioLabel: "Easy", radioAction: setEasyDifficulty },
    { radioLabel: "Medium", radioAction: setMediumDifficulty },
    { radioLabel: "Hard", radioAction: setHardDifficulty },
  ];

  return (
    <div className={styleClasses.join(" ")}>
      <div className={classes.Heading}>
        <h1 className={classes.HeadingTitle}>
          Welcome to Sudocool <span>♨︎</span>
        </h1>
        <h3 className={classes.HeadingInfo}>
          Select a game mode below to get started
        </h3>
      </div>
      <div className={classes.Options}>
        <OptionSide
          heading="Play Sudoku"
          details="Gives you a random sudoku game to solve. Cut your coat according to
                  you size, choose your desired difficulty level below"
          btnLabel="Play now"
          btnDisabledCondition={!props.difficulty}
          btnCTA={props.setPuzzleAndSolvedPuzzle}
        >
          <RadioGroup
            radioGroupTitle="Select a difficulty level:"
            radioBtns={difficultyBtns}
            radioGroupName="difficulty button"
          />
        </OptionSide>

        <OptionSide
          heading="Solve my Sudoku"
          details='Maybe you have a sudoku that is yet to be solved🤔, enter all the
                  values of the unsolved sudoku in the corresponding grid, click the "Solve button" and let the
                  magic happen🙃'
          btnLabel="Solve now"
          btnDisabledCondition={null}
          btnCTA={props.setBoardToEmpty}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    difficulty: state.sudoku.difficulty,
    shouldShowIntroComponent: state.appUI.showIntroComponent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDifficulty: (difficulty) => {
      dispatch(sudokuActions.setDifficulty(difficulty));
    },
    setPuzzleAndSolvedPuzzle: () => {
      dispatch(sudokuActions.setPuzzleAndSolvedPuzzle());
      dispatch(sudokuActions.setGameMode(MODE_PLAY));
      dispatch(appUIactions.toggleIntroComponent());
    },
    setBoardToEmpty: () => {
      dispatch(sudokuActions.initUserInputSUdokuToSolve());
      dispatch(sudokuActions.setGameMode(MODE_SOLVE));
      dispatch(appUIactions.toggleIntroComponent());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);

IntroPage.propTypes = {
  difficulty: PropTypes.string,
  shouldShowIntroComponent: PropTypes.bool,

  setDifficulty: PropTypes.func,
  setPuzzleAndSolvedPuzzle: PropTypes.func,
  setBoardToEmpty: PropTypes.func,
};
