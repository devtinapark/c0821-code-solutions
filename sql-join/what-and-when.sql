select "f"."title",
       "f"."releaseYear",
       "c"."name" as "filmCategory"
from "films" as "f"
join "filmCategory" as "fc" using ("filmId")
join "categories" as "c" using ("categoryId")
where "f"."title" = 'Boogie Amelie';
