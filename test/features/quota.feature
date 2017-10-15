Feature:
  Httpbin.org exposes various resources for HTTP request testing
  As Httpbin client I want to verify that all API resources are working as they should
 
 Scenario: checking values of query parameters passed in url in get request
    When I GET /quotatest?app1key=private
    Then response code should be 200
    And response body path $.firstName should be John
    And response body path $.lastName should be Doe