import designTokens from '../pkg';

export default {
  title: 'Styles',
};

export const Colors = () => JSON.stringify(designTokens.color);
export const Gradients = () => JSON.stringify(designTokens.color);
