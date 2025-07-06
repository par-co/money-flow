// css
import "./TransactionForm.css";

// constants
import { TRANSACTION_TYPE_OPTIONS } from "../../constants/transaction/type/transaction-type-options";
import { TRANSACTION_CATEGORY_OPTIONS_OBJECT } from "../../constants/transaction/category/transaction-category-options-object";
import { MIN_TRANSACTION_AMOUNT_NUMBER } from "../../constants/transaction/amount/min-transaction-amount/min-transaction-amount-number";
import { MIN_TRANSACTION_AMOUNT_FORMATTED } from "../../constants/transaction/amount/min-transaction-amount/min-transaction-amount-formatted";
import { MAX_TRANSACTION_AMOUNT_NUMBER } from "../../constants/transaction/amount/max-transaction-amount/max-transaction-amount-number";
import { MAX_TRANSACTION_AMOUNT_FORMATTED } from "../../constants/transaction/amount/max-transaction-amount/max-transaction-amount-formatted";

// uuid
import { v4 as uuidv4 } from "uuid";

// hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useWarning } from "../../hooks/useWarning";

// classes
import Transaction from "../../utilities/classes/Transaction";

// components
import TransactionType from "../TransactionType/TransactionType";
import TransactionCategory from "../TransactionCategory/TransactionCategory";
import TransactionDate from "../TransactionDate/TransactionDate";
import TransactionAmount from "../TransactionAmount/TransactionAmount";
import AddButton from "../AddButton/AddButton";
import Warning from "../Warning/Warning";
import Confirmation from "../Confirmation/Confirmation";

// types
import type {
  ITransaction,
  TConfirmation,
  TTransactionAmount,
  TTransactionCategory,
  TTransactionCategoryLabel,
  TTransactionCategoryOptions,
  TTransactionDate,
  TTransactionFormState,
  TTransactionsContext,
  TTransactionType,
  TWarningAmount,
} from "../../types";

// JSX
import type { JSX } from "react";

//--------------------------------------------------------------------------------------------------//

type TTransactionFormProps = Pick<TTransactionsContext, "setTransactions">;

export default function TransactionForm({
  setTransactions,
}: TTransactionFormProps): JSX.Element {
  /**
   * Immutable initial values for all transaction form fields.
   */
  const initialFormState: TTransactionFormState = Object.freeze({
    transaction: {
      type: "",
      category: {
        label: "Please select the transaction category:",
        options: [...TRANSACTION_CATEGORY_OPTIONS_OBJECT.initial],
        value: "",
      },
      date: "",
      amount: "",
    },
    confirmation: "",
  } as const);

  const initialTransactionType: TTransactionType =
    initialFormState.transaction.type;
  const [transactionType, setTransactionType] = useState<TTransactionType>(
    initialTransactionType
  );

  const initialTransactionCategoryLabel: TTransactionCategoryLabel =
    initialFormState.transaction.category.label;
  const [transactionCategoryLabel, setTransactionCategoryLabel] =
    useState<TTransactionCategoryLabel>(initialTransactionCategoryLabel);

  const initialTransactionCategoryOptions: TTransactionCategoryOptions =
    initialFormState.transaction.category.options;
  const [transactionCategoryOptions, setTransactionCategoryOptions] =
    useState<TTransactionCategoryOptions>(initialTransactionCategoryOptions);

  const initialTransactionCategory: TTransactionCategory =
    initialFormState.transaction.category.value;
  const [transactionCategory, setTransactionCategory] =
    useState<TTransactionCategory>(initialTransactionCategory);

  const initialTransactionDate: TTransactionDate =
    initialFormState.transaction.date;
  const [transactionDate, setTransactionDate] = useState<TTransactionDate>(
    initialTransactionDate
  );

  const initialTransactionAmount: TTransactionAmount =
    initialFormState.transaction.amount;
  const [transactionAmount, setTransactionAmount] =
    useState<TTransactionAmount>(initialTransactionAmount);

  const initialConfirmation: TConfirmation = initialFormState.confirmation;
  const [confirmation, setConfirmation] =
    useState<TConfirmation>(initialConfirmation);

  const { warning, updateWarningField, resetWarningField, resetWarning } =
    useWarning();

  /**
   * Utility object that provides setters for each part of the transaction form.
   */
  const setters = Object.freeze({
    transaction: {
      type: setTransactionType,
      category: {
        label: setTransactionCategoryLabel,
        options: setTransactionCategoryOptions,
        value: setTransactionCategory,
      },
      date: setTransactionDate,
      amount: setTransactionAmount,
    },
    confirmation: setConfirmation,
  } as const);

  const resetTransactionType = (): void => {
    const updatedTransactionType: TTransactionType = initialTransactionType;
    setters.transaction.type(updatedTransactionType);
  };

  const resetTransactionCategoryLabel = (): void => {
    const updatedTransactionCategoryLabel: TTransactionCategoryLabel =
      initialTransactionCategoryLabel;
    setters.transaction.category.label(updatedTransactionCategoryLabel);
  };

  const resetTransactionCategoryOptions = (): void => {
    const updatedTransactionCategoryOptions: TTransactionCategoryOptions =
      initialTransactionCategoryOptions;
    setters.transaction.category.options(updatedTransactionCategoryOptions);
  };

  const resetTransactionCategory = (): void => {
    const updatedTransactionCategory: TTransactionCategory =
      initialTransactionCategory;
    setters.transaction.category.value(updatedTransactionCategory);
  };

  const resetTransactionDate = (): void => {
    const updatedTransactionDate: TTransactionDate = initialTransactionDate;
    setters.transaction.date(updatedTransactionDate);
  };

  const resetTransactionAmount = (): void => {
    const updatedTransactionAmount: TTransactionAmount =
      initialTransactionAmount;
    setters.transaction.amount(updatedTransactionAmount);
  };

  const resetConfirmation = (): void => {
    const updatedConfirmation: TConfirmation = initialConfirmation;
    setters.confirmation(updatedConfirmation);
  };

  /**
   * Utility object that provides reset functions for each part of the transaction form.
   */
  const reset = Object.freeze({
    transaction: {
      type: resetTransactionType,
      category: {
        label: resetTransactionCategoryLabel,
        options: resetTransactionCategoryOptions,
        state: resetTransactionCategory,
      },
      date: resetTransactionDate,
      amount: resetTransactionAmount,
    },
    confirmation: resetConfirmation,
    warning: resetWarning,
  } as const);

  const resetCategoryDateAmountWarning = (): void => {
    reset.transaction.category.state();
    reset.transaction.date();
    reset.transaction.amount();
    reset.warning();
  };

  const resetAllExceptTypeAndConfirmation = (): void => {
    reset.transaction.category.label();
    reset.transaction.category.options();
    resetCategoryDateAmountWarning();
  };

  const resetAllExceptConfirmation = (): void => {
    reset.transaction.type();
    resetAllExceptTypeAndConfirmation();
  };

  const validateTransactionType = (): void => {
    if (!transactionType) {
      updateWarningField("type", "Transaction type is required.");
    } else {
      resetWarningField("type");
    }
  };

  const validateTransactionCategory = (): void => {
    if (!transactionCategory) {
      updateWarningField("category", "Transaction category is required.");
    } else {
      resetWarningField("category");
    }
  };

  const validateTransactionDate = (): void => {
    if (!transactionDate) {
      updateWarningField("date", "Transaction date is required.");
    } else {
      resetWarningField("date");
    }
  };

  const getWarningAmount = (): TWarningAmount => {
    if (!transactionAmount) {
      return "The amount cannot be empty."; // null undefined ""
    }

    const trimmedTransactionAmount = String(transactionAmount).trim();
    const trimmedTransactionAmountToNumber = Number(trimmedTransactionAmount);

    if (!trimmedTransactionAmount) {
      return "The amount cannot be empty.";
    } else if (isNaN(trimmedTransactionAmountToNumber)) {
      return "The amount should be a number.";
    } else if (trimmedTransactionAmountToNumber === 0) {
      return "The amount cannot be zero.";
    } else if (
      trimmedTransactionAmountToNumber < MIN_TRANSACTION_AMOUNT_NUMBER
    ) {
      return `The amount should be at least ${MIN_TRANSACTION_AMOUNT_FORMATTED}`;
    } else if (
      trimmedTransactionAmountToNumber > MAX_TRANSACTION_AMOUNT_NUMBER
    ) {
      return `The amount should be at most ${MAX_TRANSACTION_AMOUNT_FORMATTED}`;
    } else {
      return "";
    }
  };

  const validateTransactionAmount = (): void => {
    const warningAmount = getWarningAmount();
    if (warningAmount) {
      updateWarningField("amount", warningAmount);
    } else {
      resetWarningField("amount");
    }
  };

  /**
   * Utility object that provides validation functions for each field in the transaction form.
   */
  const validateTransaction = Object.freeze({
    type: validateTransactionType,
    category: validateTransactionCategory,
    date: validateTransactionDate,
    amount: validateTransactionAmount,
  } as const);

  const applyValidation = (): void => {
    validateTransaction.type();
    validateTransaction.category();
    validateTransaction.date();
    validateTransaction.amount();
  };

  const isTransactionAmountValid = (): boolean => {
    return getWarningAmount() === "";
  };

  const add = (): void => {
    if (!isTransactionAmountValid()) return;

    const newTransaction: ITransaction = new Transaction(
      uuidv4(),
      transactionType,
      transactionCategory,
      transactionDate,
      Number(transactionAmount).toFixed(2)
    );

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);

    setters.confirmation("The transaction has been added.");
  };

  const isTransactionValid = (): boolean => {
    if (
      transactionType &&
      transactionCategory &&
      transactionDate &&
      isTransactionAmountValid()
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    reset.confirmation();
    applyValidation();

    if (isTransactionValid()) {
      add();
      resetAllExceptConfirmation();
    }
  };

  useEffect(() => {
    if (transactionType === "expense") {
      reset.confirmation();
      setters.transaction.category.label("Please select the expense category:");
      setters.transaction.category.options([
        ...TRANSACTION_CATEGORY_OPTIONS_OBJECT.expenses,
      ]);
      resetCategoryDateAmountWarning();
    } else if (transactionType === "income") {
      reset.confirmation();
      setters.transaction.category.label("Please select the income category:");
      setters.transaction.category.options([
        ...TRANSACTION_CATEGORY_OPTIONS_OBJECT.incomes,
      ]);
      resetCategoryDateAmountWarning();
    } else {
      resetAllExceptTypeAndConfirmation();
    }
  }, [transactionType]);

  useEffect(() => {
    reset.transaction.date();
    reset.transaction.amount();
    reset.warning();
  }, [transactionCategory]);

  useEffect(() => {
    reset.transaction.amount();
    reset.warning();
  }, [transactionDate]);

  useEffect(() => {
    reset.warning();
  }, [transactionAmount]);

  const { pathname } = useLocation();
  useEffect(() => {
    reset.confirmation();
  }, [pathname]);

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <TransactionType
        transactionTypeOptions={TRANSACTION_TYPE_OPTIONS}
        transactionType={transactionType}
        setTransactionType={setters.transaction.type}
      />

      {warning.type && <Warning message={warning.type} />}

      {transactionType && (
        <TransactionCategory
          transactionCategoryLabel={transactionCategoryLabel}
          transactionCategoryOptions={transactionCategoryOptions}
          transactionCategory={transactionCategory}
          setTransactionCategory={setters.transaction.category.value}
        />
      )}

      {warning.category && <Warning message={warning.category} />}

      {transactionCategory && (
        <TransactionDate
          transactionDate={transactionDate}
          setTransactionDate={setters.transaction.date}
        />
      )}

      {warning.date && <Warning message={warning.date} />}

      {transactionDate && (
        <TransactionAmount
          initialTransactionAmount={initialTransactionAmount}
          transactionAmount={transactionAmount}
          setTransactionAmount={setters.transaction.amount}
          isTransactionAmountValid={isTransactionAmountValid}
        />
      )}

      {warning.amount && <Warning message={warning.amount} />}

      {transactionDate && <AddButton />}

      {confirmation && <Confirmation message={confirmation} />}
    </form>
  );
}
