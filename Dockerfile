FROM openjdk:8-alpine

COPY target/uberjar/import-test.jar /import-test/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/import-test/app.jar"]
