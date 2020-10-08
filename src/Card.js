import React from 'react';

export default function Card() {
  //#region truncatingText
  const textStyle = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  function calculateTextStyle() {
    return truncate ? textStyle : null;
  }

  const [truncate, setToggleTruncate] = React.useState(true);

  function toggleTruncate() {
    setToggleTruncate(!truncate);
  }

  //#endregion truncatingText
  return (
    <>
      <div className='ui centered cards raised'>
        <div className='ui card'>
          <div className='content'>
            <div className='header' style={{ textAlign: 'center' }}>
              Truncation Example
            </div>
            <div className='meta' style={{ textAlign: 'center' }}>
              An example of truncating lengthy text.
            </div>
            <div
              className='description'
              onClick={toggleTruncate}
              style={calculateTextStyle()}
            >
              This is a test paragraph to show how a custom CSS and JS
              implementation of truncating a long text element, and adding an
              ellipses, to it would look.
              {/* I know line breaks are kinda sloppy, but it's quick. */}
              <br />
              <br />
              Since expanding and contracting a single cell, individually, is a
              poor idea from a UX perspective, I decided to build an entirely
              different implementation, especially since ICTBit uses SemanticUI
              as a UI framework. I instead built a sliding sidebar that displays
              the overflow string data.
              <br />
              <br />
              <hr />
              Here are several packages that perform this (this solution is a
              quick, custom implementation).
              <br />
              <br />
              <a href='https://www.npmjs.com/package/react-lines-ellipsis'>
                NPM package: react-lines-ellipses. ~30,000 weekly downloads.
              </a>
              <br />
              <br />
              <a href='https://github.com/jackyr/react-multi-clamp'>
                NPM package : react-multi-clamp. ~1,000 weekly downloads.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
