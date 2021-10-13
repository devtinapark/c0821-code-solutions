with
  tableNetSales as (
    select "f"."filmId",
           "f"."title",
           "f"."description",
           "f"."rating",
           sum("p"."amount") as "netSales"
    from "films" as "f"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" as "p" using ("rentalId")
    group by "filmId"
    order by "netSales" desc
  ),
  tableNetCost as (
    select "f"."filmId",
           sum("f"."replacementCost") as "netCost"
    from "films" as "f"
    join "inventory" using ("filmId")
    group by "filmId"
    order by "netCost" desc
  )

select "s"."title",
       "s"."description",
       "s"."rating",
       round("s"."netSales" - "c"."netCost", 2) as "profit"
from tableNetSales as "s"
join tableNetCost as "c" using ("filmId")
order by "profit" desc
limit 5;
