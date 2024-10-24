const TOKEN =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwNTcwMzY3QzYxNjc2NjA5NEMyN0Y5RTA1NjJEREUwQzc4NEUyRTAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJRRmNEWjhZV2RtQ1V3bi1lQldMZDRNZUU0dUEifQ.eyJuYmYiOjE3Mjc3MTk3NjYsImV4cCI6MjA0MzA3OTc2NiwiaXNzIjoiaHR0cHM6Ly9pZHYyLnNlYXRzLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vaWR2Mi5zZWF0cy5jbG91ZC9yZXNvdXJjZXMiLCJTRUF0U01vYmlsZSJdLCJjbGllbnRfaWQiOiJzZWF0c21hdWkuY29kZS5wa2NlIiwic3ViIjoiZTA5MjcxMGNlYWU2YTlmY2E5OWM2MzE4NzRjNjhlYzY0OTZhMGUyNjhhNzE0NzMxOGE5MDQ0M2ZkZDU0OWM2YSIsImF1dGhfdGltZSI6MTcyNzcxOTc2NSwiaWRwIjoiZGZmNTEzNDUtNjI5Mi00ZjQ0LTk3NDUtZmM0MmU4NDNkMWE5IiwibmFtZSI6WyJSYWtpYnVsIEJodWl5YW4gKFN0dWRlbnQpIiwiMjM3Nzk0MEBicnVuZWwuYWMudWsiXSwiUmVnaW9uSWQiOiIxIiwiVGVuYW50SWQiOiIxMDciLCJFbnZpcm9ubWVudEtleSI6IlJlbGVhc2UiLCJzdHVkZW50SWQiOiI0MzQ0MjciLCJTdGFmZklkIjoiIiwiQWNjZXNzUHJvZmlsZXMiOiJbNDE0XSIsIlVzZXJJZCI6IjE1MDkyNzQiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJTRUF0Uy5wcm9maWxlIiwiU0VBdFNNb2JpbGUiXSwiYW1yIjpbImV4dGVybmFsIl19.vmj6XTw7ZBorjf2nXBRnwt1qS2pU2eRjhJs_y9bLO0Ivc8uJC7kZz_ewWSHnEIgr0L64E9OVP7TCVRVoKWW4IL6qtW-ngnAdYqQ00y__Dr4fsXw4MuRAdl1HGGC--QhXsNWiIEKvduh6AFxZa4orSI42bGxRbkWoJ8Ki1c8SkAl_9svmbdogLv0rqc1xjpCPaazlqDztb2XBgbLSqHqVQDtEc0HwDR0lxDdo6Cw1tWmGk78yeMQbwe64W_jquC1pVQa3LIoNk5F6C4V6ETwGaogYMSO4NqtEGhSVcAVn-l4SyX0LUjG3RXfsqzv5w0YtmmgzBabcelwyD6gVDtX665FMHtXoDTPcaAm44uAjZOwEQBn9XStX2Bpd7C7BH_PXybKfC7vZ_jyRYB40AnQQU7t-moEQRoQr23dVYThKGu-PqMR8NULyQhT1t7D20w7NckxyjTeK36C6FWthUo7oGljwrg_Tu1rXZSTIuXo-mbWsMKMJvCbsdPXRHWLdL_n5JY5yau5WMCuKOMuL0Iy2GZk5-KeEJ1MB2KrkipnKC0AY0Qjzk2BKpBBmZ4CxbM_45DA48nJcMBJ6hGk6Yp41gJGgSPgx1kn-qITqcgUN-Y7G08QYdFkyj1NJX8SynFVZLy-zmnOkPxOTK4CPn7sgcR2ZhoejpD3zTdq81tz59bc";

const CLASSES_OTKEN =
  "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwNTcwMzY3QzYxNjc2NjA5NEMyN0Y5RTA1NjJEREUwQzc4NEUyRTAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJRRmNEWjhZV2RtQ1V3bi1lQldMZDRNZUU0dUEifQ.eyJuYmYiOjE3Mjc3MTk3NjYsImV4cCI6MjA0MzA3OTc2NiwiaXNzIjoiaHR0cHM6Ly9pZHYyLnNlYXRzLmNsb3VkIiwiYXVkIjpbImh0dHBzOi8vaWR2Mi5zZWF0cy5jbG91ZC9yZXNvdXJjZXMiLCJTRUF0U01vYmlsZSJdLCJjbGllbnRfaWQiOiJzZWF0c21hdWkuY29kZS5wa2NlIiwic3ViIjoiZTA5MjcxMGNlYWU2YTlmY2E5OWM2MzE4NzRjNjhlYzY0OTZhMGUyNjhhNzE0NzMxOGE5MDQ0M2ZkZDU0OWM2YSIsImF1dGhfdGltZSI6MTcyNzcxOTc2NSwiaWRwIjoiZGZmNTEzNDUtNjI5Mi00ZjQ0LTk3NDUtZmM0MmU4NDNkMWE5IiwibmFtZSI6WyJSYWtpYnVsIEJodWl5YW4gKFN0dWRlbnQpIiwiMjM3Nzk0MEBicnVuZWwuYWMudWsiXSwiUmVnaW9uSWQiOiIxIiwiVGVuYW50SWQiOiIxMDciLCJFbnZpcm9ubWVudEtleSI6IlJlbGVhc2UiLCJzdHVkZW50SWQiOiI0MzQ0MjciLCJTdGFmZklkIjoiIiwiQWNjZXNzUHJvZmlsZXMiOiJbNDE0XSIsIlVzZXJJZCI6IjE1MDkyNzQiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJTRUF0Uy5wcm9maWxlIiwiU0VBdFNNb2JpbGUiXSwiYW1yIjpbImV4dGVybmFsIl19.vmj6XTw7ZBorjf2nXBRnwt1qS2pU2eRjhJs_y9bLO0Ivc8uJC7kZz_ewWSHnEIgr0L64E9OVP7TCVRVoKWW4IL6qtW-ngnAdYqQ00y__Dr4fsXw4MuRAdl1HGGC--QhXsNWiIEKvduh6AFxZa4orSI42bGxRbkWoJ8Ki1c8SkAl_9svmbdogLv0rqc1xjpCPaazlqDztb2XBgbLSqHqVQDtEc0HwDR0lxDdo6Cw1tWmGk78yeMQbwe64W_jquC1pVQa3LIoNk5F6C4V6ETwGaogYMSO4NqtEGhSVcAVn-l4SyX0LUjG3RXfsqzv5w0YtmmgzBabcelwyD6gVDtX665FMHtXoDTPcaAm44uAjZOwEQBn9XStX2Bpd7C7BH_PXybKfC7vZ_jyRYB40AnQQU7t-moEQRoQr23dVYThKGu-PqMR8NULyQhT1t7D20w7NckxyjTeK36C6FWthUo7oGljwrg_Tu1rXZSTIuXo-mbWsMKMJvCbsdPXRHWLdL_n5JY5yau5WMCuKOMuL0Iy2GZk5-KeEJ1MB2KrkipnKC0AY0Qjzk2BKpBBmZ4CxbM_45DA48nJcMBJ6hGk6Yp41gJGgSPgx1kn-qITqcgUN-Y7G08QYdFkyj1NJX8SynFVZLy-zmnOkPxOTK4CPn7sgcR2ZhoejpD3zTdq81tz59bc";

// const STATS_ENDPOINT = `https://01v2mobileapi.seats.cloud/api/v1/students/myself/stats?startDate=${startDate}&endDate=${endDate}&excludeOptional=False`;

const CHECKIN_ENDPOINT =
  "https://01v2mobileapi.seats.cloud/api/v1/students/myself/checkins";

const GET_CLASSES_ENDPOINT = `https://01v2mobileapi.seats.cloud/api/v1/students/myself/events?startDate=1698796800&endDate=1730419199`;

// async function getStats() {
//   try {
//     const response = await fetch(START_ENDPOINT, {
//       method: "GET",
//       headers: {
//         Host: "01v2mobileapi.seats.cloud",
//         Connection: "keep-alive",
//         Authorization: `Bearer ${TOKEN}`,
//         "Content-Type": "application/json",
//         Accept: "*/*",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// }

async function Checkin(eventId, locationName, dateTime, timeTableId, uuid) {
  try {
    const response = await fetch(CHECKIN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: null,
        studentId: null,
        eventId: 0,
        longitude: "",
        latitude: "",
        locationName: "",
        checkInReason: "Ibeacon",
        dateTime,
        badgeNumber: "",
        timetableId: timeTableId,
        uuid,
      }),
    });

    // Add better error handling
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Response headers:",
        Object.fromEntries(response.headers.entries())
      );
      console.error("Response body:", errorText);
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const data = await response.json();
    console.log("Checkin successful!");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

Checkin(
  41670509,
  "ESGW Auditorium",
  new Date(1729767600000),
  1120172,
  "C26BDA15-B371-4C19-8636-DA06CA16D47F:1:58"
);

async function getClasses() {
  try {
    const response = await fetch(GET_CLASSES_ENDPOINT, {
      method: "GET",
      headers: {
        Host: "01v2mobileapi.seats.cloud",
        Authorization: CLASSES_OTKEN,
        Accept: "*/*",
        Connection: "keep-alive",
      },
    });

    // Add better error handling
    if (!response.ok) {
      console.error("Response body:", response);
      throw new Error(`HTTP error! status!`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Checkin()

// const classes = getClasses();
