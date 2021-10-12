select "c"."firstName",
       "c"."lastName"
from "rentals"
join "customers" as "c" using ("customerId")
join "inventory" using ("inventoryId")
join "films" as "f" using ("filmId")
where "f"."title" = 'Magic Mallrats';
