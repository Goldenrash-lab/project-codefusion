import { Chart } from 'components/Chart/Chart';
import {
  StyledContainer,
  StyledStatsInfo,
  StyledTitle,
} from 'components/Chart/Chart.styled';
import { StatisticsDashboard } from 'components/StatisticsDashboard/StatisticsDashboard';
import { StatisticsTable } from 'components/StatisticsTable/StatisticsTable';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategoriesError,
  selectCategoriesLoading,
  selectSummary,
} from 'store/Categories/categoriesSelectors';
import { transactionsSummaryThunk } from 'store/Categories/categoriesThunk';

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const loading = useSelector(selectCategoriesLoading);
  const error = useSelector(selectCategoriesError);

  const categoriesSummary = summary?.categoriesSummary
    ?.map(category => {
      return { ...category, color: categoryColorsMap.get(category.name) };
    })
    .sort((a, b) => a.total - b.total);

  const expenseSummary = summary?.expenseSummary;
  const incomeSummary = summary?.incomeSummary;

  useEffect(() => {
    dispatch(transactionsSummaryThunk());
  }, [dispatch]);

  return (
    <div>
      <StyledTitle>Statistics</StyledTitle>
      {loading && !error && <b>Request in progress...</b>}
      {!loading && summary !== null && (
        <StyledContainer>
          <Chart
            categoriesSummary={categoriesSummary}
            expenseSummary={expenseSummary}
          />
          <StyledStatsInfo>
            <StatisticsDashboard />
            <StatisticsTable
              categoriesSummary={categoriesSummary}
              expenseSummary={expenseSummary}
              incomeSummary={incomeSummary}
            />
          </StyledStatsInfo>
        </StyledContainer>
      )}
    </div>
  );
};

export const formatCurrency = number => {
  return Math.abs(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');
};

const categoryColorsMap = new Map([
  ['Main expenses', 'rgba(255, 215, 0, 1)'],
  ['Products', 'rgba(255, 192, 203, 1)'],
  ['Car', 'rgba(231, 84, 128, 1)'],
  ['Self care', 'rgba(153, 153, 255, 1)'],
  ['Child care', 'rgba(106, 90, 205, 1)'],
  ['Household products', 'rgba(100, 149, 237, 1)'],
  ['Education', 'rgba(173, 216, 230, 1)'],
  ['Leisure', 'rgba(144, 238, 144, 1)'],
  ['Other expenses', 'rgba(152, 251, 152, 1)'],
  ['Entertainment', 'rgba(152, 150, 152, 1)'],
]);

export default StatisticsTab;
