export const users = [
  {
    "id": "usr_1",
    "name": "Ava Carter",
    "email": "ava@moonshinecap.test",
    "role": "manager",
    "partnerAccountId": "",
    "permissions": [
      "manage:all"
    ]
  },
  {
    "id": "usr_2",
    "name": "Liam Brooks",
    "email": "liam@moonshinecap.test",
    "role": "manager",
    "partnerAccountId": "",
    "permissions": [
      "manage:all"
    ]
  },
  {
    "id": "usr_3",
    "name": "Mason Reed",
    "email": "mason@northstar.test",
    "role": "partner",
    "partnerAccountId": "pa_1",
    "permissions": [
      "links:read",
      "links:create"
    ]
  }
] as const
