import React from 'react';

import { GridItem } from './GridItem';
import { AuthorLink } from './AuthorLink';

export const ArticleCard = ({
  className,
  imageSize,
  imageType,
  item,
  item: {
    authors = [],
    datePublished,
  } = {},
  fields,
  readMore,
  readMoreEnabled,
  noIngress = false,
}) => (
  <GridItem className={className} showImage item={item} noIngress={noIngress} childrenLast={true} readMore={readMore} readMoreEnabled={readMoreEnabled}>
    <div className="article-creds">
      { authors && authors.length > 0 && (
        <ul className="authors">
          { authors.slice(0, 1).map(({ authorID, person, personUrl, image }) => (
            <AuthorLink key={authorID} author={person} url={personUrl} image={image} />
          ))}
        </ul>
      )}
      { datePublished && (
        <div className="article-date">
          {datePublished}
        </div>        
      )}
    </div>
  </GridItem>
);

export default (props) => <ArticleCard {...props} />;
