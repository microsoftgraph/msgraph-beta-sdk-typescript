/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getMobileApplicationManagementAppConfigurationReportPostRequestBody
 */
export function createGetMobileApplicationManagementAppConfigurationReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetMobileApplicationManagementAppConfigurationReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetMobileApplicationManagementAppConfigurationReportPostRequestBody(getMobileApplicationManagementAppConfigurationReportPostRequestBody: Partial<GetMobileApplicationManagementAppConfigurationReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getMobileApplicationManagementAppConfigurationReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetMobileApplicationManagementAppConfigurationReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The filter property
     */
    filter?: string;
    /**
     * The groupBy property
     */
    groupBy?: string[];
    /**
     * The name property
     */
    name?: string;
    /**
     * The orderBy property
     */
    orderBy?: string[];
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
    /**
     * The sessionId property
     */
    sessionId?: string;
    /**
     * The skip property
     */
    skip?: number;
    /**
     * The top property
     */
    top?: number;
}
/**
 * Provides operations to call the getMobileApplicationManagementAppConfigurationReport method.
 */
export interface GetMobileApplicationManagementAppConfigurationReportRequestBuilder extends BaseRequestBuilder<GetMobileApplicationManagementAppConfigurationReportRequestBuilder> {
    /**
     * Invoke action getMobileApplicationManagementAppConfigurationReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     post(body: GetMobileApplicationManagementAppConfigurationReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getMobileApplicationManagementAppConfigurationReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetMobileApplicationManagementAppConfigurationReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetMobileApplicationManagementAppConfigurationReportPostRequestBody(writer: SerializationWriter, getMobileApplicationManagementAppConfigurationReportPostRequestBody: Partial<GetMobileApplicationManagementAppConfigurationReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getMobileApplicationManagementAppConfigurationReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getMobileApplicationManagementAppConfigurationReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getMobileApplicationManagementAppConfigurationReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getMobileApplicationManagementAppConfigurationReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getMobileApplicationManagementAppConfigurationReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getMobileApplicationManagementAppConfigurationReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getMobileApplicationManagementAppConfigurationReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getMobileApplicationManagementAppConfigurationReportPostRequestBody.skip);
    writer.writeNumberValue("top", getMobileApplicationManagementAppConfigurationReportPostRequestBody.top);
    writer.writeAdditionalData(getMobileApplicationManagementAppConfigurationReportPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetMobileApplicationManagementAppConfigurationReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetMobileApplicationManagementAppConfigurationReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetMobileApplicationManagementAppConfigurationReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport";
/* tslint:enable */
/* eslint-enable */