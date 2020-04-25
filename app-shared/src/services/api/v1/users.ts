import APIClient from '@app-shared/services/APIClient';

interface PaginationDTO {
  page: number;
  limit: number;
}

interface GetUsersDTO extends PaginationDTO {
  id: number;
}

const BASE_API_V1_URL = 'http://localhost:3000/api/v1';

const usersClient = new APIClient({ baseUrl: `${BASE_API_V1_URL}/users` });

export async function getUsers(query: GetUsersDTO) {
  return await usersClient.get('/', { query });
}

export async function getUser(id: number) {
  return await usersClient.get(`/${id}`);
}

export async function deleteUser(id: number) {
  return await usersClient.delete(`/${id}`);
}
