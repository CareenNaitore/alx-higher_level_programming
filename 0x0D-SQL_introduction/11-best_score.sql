-- lists all records of 'second_table' of database hbtn_0c_0
-- in descending order on the 'score > =' column
SELECT score, name
FROM second_table
WHERE score >= 10
ORDER BY score DESC;

