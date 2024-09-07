
# SQL Queries

## Query 1: Select Order Details and Status
```sql
SELECT 
    northwind.orders.id AS 'order id', status_id, status_name, northwind.order_details_status.id
FROM
    northwind.orders
JOIN
    northwind.order_details_status ON northwind.orders.status_id = northwind.order_details_status.id;
```

## Query 2: Count Products per Supplier
```sql
SELECT 
    company, CONCAT(first_name, ' ', last_name) AS 'supplier full name', COUNT(*) AS number_of_products
FROM
    northwind.products
JOIN
    northwind.suppliers ON northwind.products.supplier_ids = northwind.suppliers.id
GROUP BY northwind.products.supplier_ids
ORDER BY number_of_products;
```

## Query 3: List Orders with Customer and Employee Names
```sql
SELECT 
    northwind.orders.id AS 'order id',
    CONCAT(northwind.customers.first_name, ' ', northwind.customers.last_name) AS 'customer full name',
    CONCAT(northwind.employees.first_name, ' ', northwind.employees.last_name) AS 'employees full name'
FROM
    northwind.orders
JOIN
    northwind.customers ON northwind.orders.customer_id = northwind.customers.id
JOIN
    northwind.employees ON northwind.orders.employee_id = northwind.employees.id;
```

## Query 4: List Employees with Their Privileges
```sql
SELECT 
    CONCAT(northwind.employees.first_name, ' ', northwind.employees.last_name) AS 'employees full name',
    privilege_name
FROM
    northwind.employees
JOIN
    northwind.employee_privileges ON northwind.employee_privileges.employee_id = northwind.employees.id
JOIN
    northwind.privileges ON northwind.employee_privileges.privilege_id = northwind.privileges.id;
```

## Query 5: Select Purchase Order Details and Supplier Information
```sql
SELECT 
    purchase_order_details.*, company
FROM
    northwind.purchase_order_details
JOIN
    northwind.products ON northwind.purchase_order_details.product_id = northwind.products.id
JOIN
    northwind.suppliers ON northwind.suppliers.id = northwind.products.supplier_ids;
```
