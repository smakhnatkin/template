import { createSelector } from 'reselect'

export const pseudoSelector = () => 'Текст: ';
export const templateSelector = ({ template }) => template;

export const getTemplate = createSelector(
    templateSelector,
    template => template
);

export const getTemplateWithPseudo = createSelector(
    pseudoSelector,
    getTemplate,
    (pseudo, template) => `${pseudo} ${template}`
);
