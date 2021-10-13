select "c"."firstName",
       "c"."lastName",
       sum("p"."amount") as "totalSpent"
from "customers" as "c"
join "payments" as "p" using ("customerId")
group by "c"."customerId"
order by "totalSpent" desc;
