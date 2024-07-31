
import { expect, test } from '@playwright/test';

test('get api demo', async ({request}) => {
  // Make the API request
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Parse the JSON response
  const body = await response.json();

  // Validate the data
  validateUserData(body.data);

  // Additional assertions
  expect(body.data.id).toBe(2);
  expect(body.data.email).toBe('janet.weaver@reqres.in');
  expect(body.data.first_name).toBe('Janet');
  expect(body.data.last_name).toBe('Weaver');
  expect(body.data.avatar).toBe('https://reqres.in/img/faces/2-image.jpg');
  expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');
});

/**
 * An interface representing a user's data.
 *
 * @interface UserData
 * @property {number} id - The user's ID.
 * @property {string} email - The user's email address.
 * @property {string} first_name - The user's first name.
 * @property {string} last_name - The user's last name.
 * @property {string} avatar - The URL of the user's avatar image.
 */
interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

/**
 * Validates the structure and content of a UserData object.
 *
 * @param {UserData} userData - The UserData object to be validated.
 * @return {void} This function does not return anything.
 */
function validateUserData(userData: UserData) {
  expect(userData).toHaveProperty('id');
  expect(userData).toHaveProperty('email');
  expect(userData).toHaveProperty('first_name');
  expect(userData).toHaveProperty('last_name');
  expect(userData).toHaveProperty('avatar');

  // Add more specific validations if necessary
  expect(typeof userData.id).toBe('number');
  expect(typeof userData.email).toBe('string');
  expect(typeof userData.first_name).toBe('string');
  expect(typeof userData.last_name).toBe('string');
  expect(typeof userData.avatar).toBe('string');

  // Example specific content validation
  expect(userData.id).toBeGreaterThan(0);
  expect(userData.email).toMatch(/.+@.+\..+/);
}