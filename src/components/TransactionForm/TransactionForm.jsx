import "./TransactionForm.css";
import TransactionType from "../TransactionType/TransactionType";
import TransactionCategory from "../TransactionCategory/TransactionCategory";
import { useEffect, useState } from "react";
import TransactionDate from "../TransactionDate/TransactionDate";
import TransactionAmount from "../TransactionAmount/TransactionAmount";
import AddButton from "../AddButton/AddButton";
import TransactionObject from "../../utilities/classes/TransactionObject";
import { v4 as uuidv4 } from "uuid";
import Warning from "../Warning/Warning";
import Confirmation from "../Confirmation/Confirmation";
import { useLocation } from "react-router-dom";

export default function TransactionForm({ transactions, setTransactions }) {
  const transactionTypeOptions = ["Expense", "Income"];
  const transactionCategoriesObj = {
    expenses: [
      "Rent and Housing",
      "Food and Groceries",
      "Transportation",
      "Entertainment",
      "Shopping",
      "Health and Wellness",
      "Education",
    ],
    incomes: ["Salary", "Investments", "Gift"],
  };

  const initialTransactionType = "";
  const [transactionType, setTransactionType] = useState(
    initialTransactionType
  );

  const initialTransactionCategory = "";
  const [transactionCategory, setTransactionCategory] = useState(
    initialTransactionCategory
  );

  const initialTransactionCategoryLabel =
    "Please select the transaction category:";
  const [transactionCategoryLabel, setTransactionCategoryLabel] = useState(
    initialTransactionCategoryLabel
  );

  const initialTransactionCategoryOptions = [];
  const [transactionCategoryOptions, setTransactionCategoryOptions] = useState(
    initialTransactionCategoryOptions
  );

  const initialTransactionDate = "";
  const [transactionDate, setTransactionDate] = useState(
    initialTransactionDate
  );

  const initialTransactionAmount = "";
  const [transactionAmount, setTransactionAmount] = useState(
    initialTransactionAmount
  );

  const initialWarning = { type: "", category: "", date: "", amount: "" };
  const [warning, setWarning] = useState(initialWarning);

  const initialConfirmation = "";
  const [confirmation, setConfirmation] = useState(initialConfirmation);

  const resetTransactionType = () => {
    setTransactionType(initialTransactionType);
  };

  const resetTransactionCategoryLabel = () => {
    setTransactionCategoryLabel(initialTransactionCategoryLabel);
  };

  const resetTransactionCategoryOptions = () => {
    setTransactionCategoryOptions(initialTransactionCategoryOptions);
  };

  const resetTransactionCategory = () => {
    setTransactionCategory(initialTransactionCategory);
  };

  const resetTransactionDate = () => {
    setTransactionDate(initialTransactionDate);
  };

  const resetTransactionAmount = () => {
    setTransactionAmount(initialTransactionAmount);
  };

  const resetWarning = () => {
    setWarning(initialWarning);
  };

  const updateWarningType = (newWarningType) => {
    const updatedWarning = { ...warning, type: newWarningType };
    setWarning(updatedWarning);
  };

  const resetWarningType = () => {
    updateWarningType("");
  };

  const updateWarningCategory = (newWarningCategory) => {
    const updatedWarning = { ...warning, category: newWarningCategory };
    setWarning(updatedWarning);
  };

  const resetWarningCategory = () => {
    updateWarningCategory("");
  };

  const updateWarningDate = (newWarningDate) => {
    const updatedWarning = { ...warning, date: newWarningDate };
    setWarning(updatedWarning);
  };

  const resetWarningDate = () => {
    updateWarningDate("");
  };

  const updateWarningAmount = (newWarningAmount) => {
    const updatedWarning = { ...warning, amount: newWarningAmount };
    setWarning(updatedWarning);
  };

  const resetWarningAmount = () => {
    updateWarningAmount("");
  };

  const resetConfirmation = () => {
    setConfirmation(initialConfirmation);
  };

  const resetCategoryDateAmountWarning = () => {
    resetTransactionCategory();
    resetTransactionDate();
    resetTransactionAmount();
    resetWarning();
  };

  const resetAllExceptConfirmation = () => {
    resetTransactionType();
    resetTransactionCategoryLabel();
    resetTransactionCategoryOptions();
    resetCategoryDateAmountWarning();
  };

  const validateTransactionType = () => {
    if (!transactionType) {
      updateWarningType("Transaction type is required.");
    } else {
      resetWarningType();
    }
  };

  const validateTransactionCategory = () => {
    if (!transactionCategory) {
      updateWarningCategory("Transaction category is required.");
    } else {
      resetWarningCategory();
    }
  };

  const validateTransactionDate = () => {
    if (!transactionDate) {
      updateWarningDate("Transaction date is required.");
    } else {
      resetWarningDate();
    }
  };

  const validateTransactionAmount = () => {
    const zeroAndEmpty = /^0*(\.0*)?$/; // zero and empty string so it must be after checking empty input
    if (!transactionAmount) {
      updateWarningAmount("The amount cannot be empty.");
    } else if (transactionAmount && zeroAndEmpty.test(transactionAmount)) {
      updateWarningAmount("The amount cannot be zero.");
    } else if (isNaN(transactionAmount)) {
      updateWarningAmount("The amount should be a number.");
    } else {
      resetWarningAmount();
    }
  };

  const add = () => {
    const newTransaction = new TransactionObject(
      uuidv4(),
      transactionType,
      transactionCategory,
      transactionDate,
      Number(transactionAmount).toFixed(2)
    );
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setConfirmation("The transation has been added.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetConfirmation();
    validateTransactionType();
    validateTransactionCategory();
    validateTransactionDate();
    validateTransactionAmount();
    if (
      transactionType &&
      transactionCategory &&
      transactionDate &&
      transactionAmount &&
      !isNaN(transactionAmount) &&
      Number(transactionAmount) >= 0.01
    ) {
      add();
      resetAllExceptConfirmation();
    }
  };

  useEffect(() => {
    if (transactionType === "expense") {
      resetConfirmation();
      setTransactionCategoryLabel("Please select the expense category:");
      setTransactionCategoryOptions(transactionCategoriesObj.expenses);
      resetCategoryDateAmountWarning();
    } else if (transactionType === "income") {
      resetConfirmation();
      setTransactionCategoryLabel("Please select the income category:");
      setTransactionCategoryOptions(transactionCategoriesObj.incomes);
      resetCategoryDateAmountWarning();
    } else {
      resetTransactionCategoryLabel();
      resetTransactionCategoryOptions();
      resetCategoryDateAmountWarning();
    }
  }, [transactionType]);

  useEffect(() => {
    resetTransactionDate();
    resetTransactionAmount();
    resetWarning();
  }, [transactionCategory]);

  useEffect(() => {
    resetTransactionAmount();
    resetWarning();
  }, [transactionDate]);

  useEffect(() => {
    resetWarning();
  }, [transactionAmount]);

  const { pathname } = useLocation();
  useEffect(() => {
    resetConfirmation();
  }, [pathname]);

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <TransactionType
        transactionTypeOptions={transactionTypeOptions}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
      />

      {warning.type && <Warning message={warning.type} />}

      {transactionType && (
        <TransactionCategory
          transactionCategoryLabel={transactionCategoryLabel}
          transactionCategoryOptions={transactionCategoryOptions}
          transactionCategory={transactionCategory}
          setTransactionCategory={setTransactionCategory}
        />
      )}

      {warning.category && <Warning message={warning.category} />}

      {transactionCategory && (
        <TransactionDate
          transactionDate={transactionDate}
          setTransactionDate={setTransactionDate}
        />
      )}

      {warning.date && <Warning message={warning.date} />}

      {transactionDate && (
        <TransactionAmount
          transactionAmount={transactionAmount}
          setTransactionAmount={setTransactionAmount}
        />
      )}

      {warning.amount && <Warning message={warning.amount} />}

      {transactionDate && <AddButton />}

      {confirmation && <Confirmation message={confirmation} />}
    </form>
  );
}
