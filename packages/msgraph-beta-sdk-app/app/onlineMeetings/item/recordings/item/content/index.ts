/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCallRecordingFromDiscriminatorValue, type CallRecording } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the media for the commsApplication entity.
 */
export interface ContentRequestBuilder extends BaseRequestBuilder<ContentRequestBuilder> {
    /**
     * The content of the recording. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * The content of the recording. Read-only.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CallRecording
     */
     put(body: ArrayBuffer | undefined, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CallRecording | undefined>;
    /**
     * The content of the recording. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The content of the recording. Read-only.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPutRequestInformation(body: ArrayBuffer | undefined, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const ContentRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
    put: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCallRecordingFromDiscriminatorValue,
        requestBodyContentType: "application/octet-stream",
        requestInformationContentSetMethod: "setStreamContent",
    },
};
/**
 * Uri template for the request builder.
 */
export const ContentRequestBuilderUriTemplate = "{+baseurl}/app/onlineMeetings/{onlineMeeting%2Did}/recordings/{callRecording%2Did}/content";
/* tslint:enable */
/* eslint-enable */