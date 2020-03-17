import { ConditionAmount } from '../condition-amount/condition-amount.model';

export interface Network {
  direct: ConditionAmount[];
  indirect: ConditionAmount[];
}
