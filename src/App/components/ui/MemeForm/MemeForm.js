import React from "react";
import styles from "./MemeForm.module.css";
import PropTypes from "prop-types";
import _store, { ACTIONS_CURRENT } from "../../../store/store";
import { connect, useDispatch } from "react-redux";
const MemeForm = (props) => {
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="saisir titre"
          value={props.meme.titre}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onMemeChange({ ...props.meme, titre: evt.target.value });
          }}
        />
        <hr />
        <h2>Image</h2>
        <select
          value={props.meme.imageId}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}
        >
          <option value="-1">Aucune</option>
          {props.images.map((e, i) => (
            <option value={e.id} key={"select-option-" + i}>
              {e.name}
            </option>
          ))}
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.meme.x}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  x: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.meme.y}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  y: parseInt(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input
          type="color"
          id="f_color"
          value={props.meme.color}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onMemeChange({
              ...props.meme,
              color: evt.target.value,
            });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              min={0}
              value={props.meme.fontSize}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  fontSize: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              min="100"
              step="100"
              max="900"
              value={props.meme.fontWeight}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  fontWeight: evt.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.meme.underline}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  underline: evt.target.checked,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.meme.italic}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onMemeChange({
                  ...props.meme,
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.half}></div>
      </form>
    </div>
  );
};
MemeForm.propTypes = {
  onMemeChange: PropTypes.func.isRequired,
  meme: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};
export default MemeForm;
const HookConectedMemeForm = (props) => {
  const dispatch = useDispatch();
  return (
    <MemeForm
    {...props}
      meme={_store.getState().current}
      onMemeChange={(meme) => {
        dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:meme});
      }}
    />
  );
};
function mapStateToProps(storeState, parentProps) {
  return {
    ...parentProps,
    meme: storeState.current,
    images: storeState.ressources.images,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onMemeChange: (meme) => {
      dispatch({ type: ACTIONS_CURRENT.UPDATE_CURRENT, value: meme });
    },
  };
}
export const ConnectedMemeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeForm);
