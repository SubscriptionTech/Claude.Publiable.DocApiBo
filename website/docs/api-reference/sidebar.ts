import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-reference/proabono-bo",
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
          id: "api-reference/list-customers",
          label: "Get all the available customers, with filtering to narrow the results.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-customer",
          label: "create a new customer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-customer",
          label: "Retrieve a particular customer.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer",
          label: "Update a particular customer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-customer",
          label: "Delete a particular customer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/show-customer-settings",
          label: "Retrieve a particular customer settings.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer-settings",
          label: "Update a particular customer settings",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/show-customer-billin-address",
          label: "Retrieve a particular customer billing address.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer-billin-address",
          label: "Update a particular customer billing address",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/show-customer-shipping-address",
          label: "Retrieve a particular customer shipping address.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-customer-shipping-address",
          label: "Update a particular customer shipping address",
          className: "api-method patch",
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
          id: "api-reference/list-features",
          label: "Get all the available features, with filtering to narrow the results.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-feature",
          label: "create a new Feature",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-feature",
          label: "Retrieve a particular feature.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-feature",
          label: "Update a particular feature",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-feature",
          label: "Delete a particular feature",
          className: "api-method delete",
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
          id: "api-reference/list-offers",
          label: "Get all the available offers, with filtering to narrow the results.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-offer",
          label: "create a new Offer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-offer",
          label: "Retrieve a particular offer.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-offer",
          label: "Update a particular offer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-offer",
          label: "Delete a particular offer",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/calculate-offer-quote",
          label: "Compute a pricing estimation based on an Offer and a Customer. ProAbono also applies Taxes if necessary.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-offer-features",
          label: "Get all the available features, with filtering to narrow the results.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-offer-feature",
          label: "create a new Offe feature",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-offer-feature",
          label: "Retrieve a particular offer feature.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-offer-feature",
          label: "Update a particular offer feature",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-offer-feature",
          label: "Delete a particular offer feature",
          className: "api-method delete",
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
          id: "api-reference/list-pricing-tables",
          label: "Get all the available pricing tables, with filtering to narrow the results.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-pricing-table",
          label: "create a new pricing table",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-pricing-table",
          label: "Retrieve a particular pricing table.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-pricing-table",
          label: "Update a particular pricing table",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-pricing-table",
          label: "Delete a particular Pricing table",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/list-pricing-table-offers",
          label: "Get all the available pricing table offers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-pricing-table-offer",
          label: "create a new pricing table offer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-pricing-table-offer",
          label: "Retrieve a particular pricing table offer.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-pricing-table-offer",
          label: "Update a particular pricing table offer",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-pricing-table-offer",
          label: "Delete a particular Pricing table offer",
          className: "api-method delete",
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
          id: "api-reference/list-subscritions",
          label: "Get all the available subscriptions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-subscription",
          label: "create a new subscription",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-subscription",
          label: "Retrieve a particular subscription.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-subscription",
          label: "Update a particular subscription",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-subscription",
          label: "Delete a particular subscription",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/calculate-subscription-quote",
          label: "Make an estimate of the price of the Subscription",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-subscrition-periods",
          label: "Get all the available subscription periods.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-subscription-period",
          label: "Retrieve a particular subscription period.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-subscrition-features",
          label: "Get all the available subscription features.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-subscription-feature",
          label: "Retrieve a particular subscription feature.",
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
          id: "api-reference/list-invoices",
          label: "Get all the available invoices.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-invoice-by-id",
          label: "Retrieve a particular invoice.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/list-invoice-lines",
          label: "Get all the available invoice lines.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-invoice-line-by-id",
          label: "Retrieve a particular invoice line.",
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
          id: "api-reference/list-payments",
          label: "Get all the available payments.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-payment-id-by-id",
          label: "Retrieve a particular payment.",
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
          id: "api-reference/list-balance-lines",
          label: "Get all the available balance lines.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-balance-line-by-id",
          label: "Retrieve a particular balance line.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Discounts",
      items: [
        {
          type: "doc",
          id: "api-reference/list-discounts",
          label: "Get all the available discounts, with filtering to narrow the results.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-discount",
          label: "create a new Discount",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-discount",
          label: "Retrieve a particular discount.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-discount",
          label: "Update a particular discount",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-reference/delete-discount",
          label: "Delete a particular discount",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/add-discount-to-subscription",
          label: "add a discount to a subscription",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
