import React from 'react';
import PropTypes from 'prop-types';

import { ImageBlock } from './ImageBlock';
import { Image } from '../shared/Image';

const Article = ({
  headerColor,
  headerPosition,
  title,
  titleInImage,
  image,
  authors,
  ingress,
  ingressInImage,
  text,
  tags,
}) => (
  <div className="article">
    <ImageBlock
      title={titleInImage && title}
      image={image}
      ingress={ingressInImage && ingress}
      text={headerColor}
      position={headerPosition} />
    
    <div className="article-title">
      { !titleInImage && title && (
        <h1>{title}</h1>
      )}
    </div>
      
    { authors && authors.length > 0 && (
      <ul className="authors">
        { authors.map(({ authorID, person, personUrl, image }) => (
          <li key={authorID}>
            <div>
              <a href={personUrl}>
                <Image
                  image={image}
                  className="extra-small"
                  imageClassName="round"
                />
                <span>
                  {person}
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    )}

    <div className="page-content">      
      { !ingressInImage && ingress && (
        <div className="ingress rich-text" dangerouslySetInnerHTML={{ __html: ingress }} />
      )}
      
      { text && (
        <div dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </div>
  </div>
);

Article.propTypes = {
  description: PropTypes.string,
  ingressInImage: PropTypes.bool,
  title: PropTypes.string,
  titleInImage: PropTypes.bool,
};

Article.defaultProps = {
  description: '',
  ingressInImage: true,
  title : '',
  titleInImage: true,
};

export default Article;

export {
  Article, 
}