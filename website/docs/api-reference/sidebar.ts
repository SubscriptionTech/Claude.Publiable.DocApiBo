import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-reference/proabono-api-backoffice",
    },
    {
      type: "category",
      label: "Customers",
      link: {
        type: "doc",
        id: "api-reference/customers",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-customer",
          label: "Retrieve a customer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer",
          label: "Update a customer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-customer",
          label: "Delete a customer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-customers",
          label: "List customers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-customer",
          label: "Create a customer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-customer-billing-address",
          label: "Retrieve the billing address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer-billing-address",
          label: "Update the billing address",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/get-customer-shipping-address",
          label: "Retrieve the shipping address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer-shipping-address",
          label: "Update the shipping address",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/get-customer-payment-settings",
          label: "Retrieve the payment settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer-payment-settings",
          label: "Update the payment settings",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Offers",
      link: {
        type: "doc",
        id: "api-reference/offers",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-offer",
          label: "Retrieve an offer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-offer",
          label: "Update an offer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-offer",
          label: "Delete an offer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-offers",
          label: "List offers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-offer",
          label: "Create an offer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/calculate-offer-quote",
          label: "Compute a pricing estimate for an offer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-offer-feature",
          label: "Retrieve an offer feature",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-offer-feature",
          label: "Update an offer feature",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-offer-feature",
          label: "Delete an offer feature",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-offer-features",
          label: "List offer features",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-offer-feature",
          label: "Create an offer feature",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Features",
      link: {
        type: "doc",
        id: "api-reference/features",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-feature",
          label: "Retrieve a feature",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-feature",
          label: "Update a feature",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-feature",
          label: "Delete a feature",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-features",
          label: "List features",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-feature",
          label: "Create a feature",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Discounts",
      link: {
        type: "doc",
        id: "api-reference/discounts",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-discount",
          label: "Retrieve a discount",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-discount",
          label: "Update a discount",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-discount",
          label: "Delete a discount",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-discounts",
          label: "List discounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-discount",
          label: "Create a discount",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/add-discount-to-subscription",
          label: "Apply a discount to a subscription",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Pricing Tables",
      link: {
        type: "doc",
        id: "api-reference/pricing-tables",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-pricing-table",
          label: "Retrieve a pricing table",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-pricing-table",
          label: "Update a pricing table",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-pricing-table",
          label: "Delete a pricing table",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-pricing-tables",
          label: "List pricing tables",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-pricing-table",
          label: "Create a pricing table",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-pricing-table-offer",
          label: "Retrieve a pricing table offer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-pricing-table-offer",
          label: "Update a pricing table offer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-pricing-table-offer",
          label: "Remove an offer from a pricing table",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-pricing-table-offers",
          label: "List pricing table offers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-pricing-table-offer",
          label: "Add an offer to a pricing table",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Subscriptions",
      link: {
        type: "doc",
        id: "api-reference/subscriptions",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-subscription",
          label: "Retrieve a subscription",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-subscription",
          label: "Update a subscription",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-subscription",
          label: "Delete a subscription",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-subscriptions",
          label: "List subscriptions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-subscription",
          label: "Create a subscription",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/calculate-subscription-quote",
          label: "Compute a pricing estimate for a subscription",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-subscription-period",
          label: "Retrieve a subscription period",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-subscription-periods",
          label: "List subscription periods",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-subscription-feature",
          label: "Retrieve a subscription feature",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-subscription-features",
          label: "List subscription features",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Invoices",
      link: {
        type: "doc",
        id: "api-reference/invoices",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-invoice",
          label: "Retrieve an invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-invoices",
          label: "List invoices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-invoice-line",
          label: "Retrieve an invoice line",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-invoice-lines",
          label: "List invoice lines",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      link: {
        type: "doc",
        id: "api-reference/payments",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-payment",
          label: "Retrieve a payment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-payments",
          label: "List payments",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Balance Lines",
      link: {
        type: "doc",
        id: "api-reference/balance-lines",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-balance-line",
          label: "Retrieve a balance line",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-balance-lines",
          label: "List balance lines",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
