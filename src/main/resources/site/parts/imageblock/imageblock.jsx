import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image/image.jsx';

const ImageBlock = ({
  Tag,
  image,
  position,
  text,
  title,
  ingress,
}) => (
  <div className="image-block">    
    <Image image={image} className="full" />
    
    { (title || ingress) && (
      <div className={`content ${text} ${position}`}>
        { title && (
          <div className="title">
            <Tag>{title}</Tag>
          </div>
        )}
        { ingress && (
          <div class="ingress" dangerouslySetInnerHTML={{ __html: ingress }} />
        )}
      </div>      
    )}
  </div>
);

ImageBlock.propTypes = {
  Tag: PropTypes.oneOf(['h1', 'h2', 'h2']),
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  position: PropTypes.oneOf(['left', 'center', 'right']),
  text: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string,
  ingress: PropTypes.string,
};

ImageBlock.defaultProps = {
  Tag: 'h1',
  image: undefined,
  title: '',
  ingress: '',
  text: 'dark',
  position: 'right',
};

export default ImageBlock;

export {
  ImageBlock,
};