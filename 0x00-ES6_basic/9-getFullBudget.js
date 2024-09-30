import getBudgetObject from './7-getBudgetObject';

export default function getFulLBudgetObject(income, gdp, capita) {
    const budget = getBudgetObject(income, gdp, capita);
    const fullBudget = {
        ...budget,
        getIncomeInDollars: (income) => `$${income}`,
        getIncomeInEuros:  (income) => `${income}€`,
    };

    return fullBudget;
}