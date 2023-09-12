# Project: HNG Internship Stage 2 Backend Task

# A. Documentation

---

## 1. Get All Persons

#### Description

- This endpoint gets all persons in the database.

### Method: GET

> ```
>c
> ```

### Example Response (**raw**)

```json
[
  {
    "user": [
        {
            "_id": "64fee303475fe4822dc5ef9c",
            "name": "jas",
            "__v": 0
        }
    ]
}
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 2.Create Person

#### Description

- This endpoint create a new person and save to the database
- Example below shows that a person name "Adepitan Ademola" has been created and added to the database
- Inputs must be passed through the request body.
- Only name of type string is allowed in the body.
- Name must be unique, if a duplicate name is entered, the request will spit error

### Method: POST

> ```
>https://ngx-tasktwo.onrender.com/api
> ```

### Example Body (**raw**)

```json
{
  "name": "jas"
}
```

### Example Response (**raw**)

```json
{
    "user": {
        "_id": "64fee303475fe4822dc5ef9c",
        "name": "jas",
        "__v": 0
    }
}
```

### Example Duplicate Error Response (**raw**)

```json
something went wrong
```

### In terminal
```
MongoServerError: E11000 duplicate key error collection: test.people index: name_1 dup key: { name: "jas" }
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 3. Get Single Person

### Method: GET

> ```
> >https://ngx-tasktwo.onrender.com/api/{id}
> ```

- Supposing id is "64fee303475fe4822dc5ef9c";

### Example Response (**raw**)

```json
{
  "_id": "64fee303475fe4822dc5ef9c",
  "name": "jas",
  "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 4. Update Person

### Method: PATCH

> ```
> 
> ```

- Supposing user_id is "64fee303475fe4822dc5ef9c";

### Example Body (**raw**)

```json
{
  "name": "Seyi"
}
```

### Example Response (**raw**)

```json
{
    "_id": "64fee303475fe4822dc5ef9c",
    "name": "Seyi",
    "__v": 0
  
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 5. Delete Person

### Method: DELETE

> ```
 >https://ngx-tasktwo.onrender.com/api/{id}
> ```

- Supposing user_id is "64fee303475fe4822dc5ef9c";

### Example Response (**raw**)

```json
"done"
```

---