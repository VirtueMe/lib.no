const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

const { imageUrl } = require('../shared/image');

exports.get = function(request) {
    const content = portal.getContent();
    const component = portal.getComponent();

    const {
      config: {
        image: imageKey = '',
        headerPosition: position,
        title = '',
        titleColor = '',
      } = {},
    } = component;

    log.info(JSON.stringify(content, null, 4));

    const props = {
      Tag: 'h1',
      image: imageUrl(imageKey, 'full'),
      title,
      position,
      text: titleColor,
    };

    log.info(JSON.stringify(props, null, 4));

    return React4xp.render('ImageBlock', props, request, { clientRender: true });
};
